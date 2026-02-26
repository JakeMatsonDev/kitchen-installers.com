// Cloudflare Pages Function — handles form submissions
// Forwards to Formsubmit.co for email delivery to newenglandkitcheninstallers@gmail.com

const FORM_EMAIL = "newenglandkitcheninstallers@gmail.com";

interface FormBody {
  email?: string;
  serviceArea?: string;
  message?: string;
  source?: string;
}

export const onRequestPost: PagesFunction = async (context) => {
  const { request } = context;

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    const body: FormBody = await request.json();
    const { email, serviceArea, message, source } = body;

    const formType = source === "quote" ? "Quote Request" : "Contact Form";

    // Forward to Formsubmit.co for email delivery
    try {
      await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://kitchen-installers.com",
          Referer: "https://kitchen-installers.com/",
        },
        body: JSON.stringify({
          _subject: `New ${formType} — Kitchen Installers`,
          _replyto: email || "",
          Email: email || "Not provided",
          "Zip Code": serviceArea || "Not provided",
          "Project Description": message || "No message provided",
          "Form Source": formType,
          _template: "table",
        }),
      });
    } catch (emailErr) {
      console.error("[Formsubmit Error]", emailErr);
    }

    // Log to Cloudflare dashboard (Pages > Functions > Real-time Logs)
    console.log(
      "[Lead Captured]",
      JSON.stringify({
        timestamp: new Date().toISOString(),
        source,
        email,
        serviceArea,
        message: message?.slice(0, 500),
      })
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you! We'll be in touch within 24 hours.",
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
