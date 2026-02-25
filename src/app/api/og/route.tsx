// Item #4: Dynamic OG Image generation using next/og
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Professional IKEA Kitchen Installation";
  const subtitle = searchParams.get("subtitle") || "New York & New Jersey";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0e0d39",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Yellow accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            backgroundColor: "#fed00e",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              backgroundColor: "#fed00e",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 700,
              color: "#0e0d39",
            }}
          >
            K
          </div>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            Kitchen Installers
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            maxWidth: "900px",
            marginBottom: "20px",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#fed00e",
            marginBottom: "40px",
          }}
        >
          {subtitle}
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <span>500+ Kitchens Installed</span>
          <span>2-Year Warranty</span>
          <span>Free Quotes</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
