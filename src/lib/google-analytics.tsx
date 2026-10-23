import Script from "next/script";

// Google Analytics 4 (G-14QEDT1XCD), installed by Mega for SEO reporting.
//
// This is the ONLY file allowed to reference Google's tag; the CI phi-guard
// excludes it by path and still blocks gtag/googletagmanager everywhere else.
// The marketing-zone rules still apply: never send custom events or params
// that reveal a condition or treatment interest. Page views only.
const GA_MEASUREMENT_ID = "G-14QEDT1XCD";

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
