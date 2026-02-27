// Cloudflare Pages Function — handles form submissions with optional file attachment
// Sends notification email via Resend API

interface Env {
  RESEND_API_KEY: string;
}

const NOTIFY_EMAIL = "newenglandkitcheninstallers@gmail.com";

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    let email = "";
    let serviceArea = "";
    let message = "";
    let source = "";
    let attachment: { filename: string; content: string } | null = null;

    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      email = (formData.get("email") as string) || "";
      serviceArea = (formData.get("serviceArea") as string) || "";
      message = (formData.get("message") as string) || "";
      source = (formData.get("source") as string) || "";
      const file = formData.get("attachment");
      if (file instanceof File && file.size > 0) {
        const arrayBuffer = await file.arrayBuffer();
        const base64 = btoa(
          new Uint8Array(arrayBuffer).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        attachment = { filename: file.name, content: base64 };
      }
    } else {
      const body = (await request.json()) as Record<string, string>;
      email = body.email || "";
      serviceArea = body.serviceArea || "";
      message = body.message || "";
      source = body.source || "";
    }

    const formType = source === "quote" ? "Quote Request" : "Contact Form";

    // Build HTML email
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #0e0d39;">New ${formType}</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Zip Code</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${serviceArea || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Project Description</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${message || "No message provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Form Source</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${formType}</td>
          </tr>
          ${attachment ? `<tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Attachment</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${attachment.filename}</td>
          </tr>` : ""}
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 13px;">
          Sent from kitchen-installers.com at ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })}
        </p>
      </div>
    `;

    // Send via Resend
    const resendPayload: Record<string, unknown> = {
      from: "Kitchen Installers <noreply@kitchen-installers.com>",
      to: [NOTIFY_EMAIL],
      subject: `New ${formType} — Kitchen Installers`,
      reply_to: email || undefined,
      html,
    };

    if (attachment) {
      resendPayload.attachments = [
        {
          filename: attachment.filename,
          content: attachment.content,
        },
      ];
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resendPayload),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error("[Resend Error]", resendRes.status, err);
    }

    console.log(
      "[Lead Captured]",
      JSON.stringify({
        timestamp: new Date().toISOString(),
        source,
        email,
        serviceArea,
        message: message?.slice(0, 500),
        hasAttachment: !!attachment,
      })
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you! We'll be in touch within 3 hours.",
      }),
      { status: 200, headers }
    );
  } catch (err) {
    console.error("[Contact API Error]", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500, headers }
    );
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
