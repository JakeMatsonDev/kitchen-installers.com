// Item #3: Google Analytics 4 + Google Tag Manager
import Script from "next/script";
import { SITE_CONFIG } from "@/lib/site-config";

export default function GoogleAnalytics() {
  const { gaId, gtmId } = SITE_CONFIG.analytics;

  // Don't render in development or if IDs are placeholder
  if (gaId.includes("XXXX") && gtmId.includes("XXXX")) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      {!gtmId.includes("XXXX") && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        </>
      )}

      {/* Google Analytics 4 */}
      {!gaId.includes("XXXX") && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${gaId}',{send_page_view:true});`,
            }}
          />
        </>
      )}
    </>
  );
}

// GTM noscript fallback for <body>
export function GTMNoScript() {
  const { gtmId } = SITE_CONFIG.analytics;
  if (gtmId.includes("XXXX")) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
