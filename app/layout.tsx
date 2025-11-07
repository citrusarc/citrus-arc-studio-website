import type { Metadata } from "next";
import Script from "next/script";
import "@/app/globals.css";

import Navbar from "@/components/ui/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "CitrusArc Studio | Creative Design & Branding Agency in Malaysia",
  description:
    "CitrusArc Studio is a creative agency based in Malaysia specializing in branding, logo design, web design, and digital storytelling. We help brands grow through impactful visuals, modern web experiences, and strategy-driven creativity.",

  keywords: [
    "CitrusArc Studio",
    "creative agency Malaysia",
    "branding agency",
    "web design Malaysia",
    "logo design",
    "digital marketing",
    "creative design studio",
    "UI UX design",
    "brand identity",
    "content creation",
    "motion graphics",
    "CitrusArc",
  ],

  openGraph: {
    title: "CitrusArc Studio | Creative Agency for Modern Brands",
    description:
      "We craft brands, websites, and visuals that connect deeply with audiences. CitrusArc Studio — your creative partner in design, branding, and digital growth.",
    url: "https://citrusarc.studio",
    siteName: "CitrusArc Studio",
    images: [
      {
        url: "https://citrusarc.studio/Images/banner.png",
        width: 1200,
        height: 630,
        alt: "CitrusArc Studio - Creative Agency in Malaysia",
      },
    ],
    locale: "en_MY",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CitrusArc Studio | Creative Branding & Web Design Agency",
    description:
      "Creative agency based in Malaysia crafting branding, websites, and strategy-driven visuals for modern brands.",
    images: ["https://citrusarc.studio/Images/banner.png"],
    creator: "@citrusarc",
  },

  alternates: {
    canonical: "https://citrusarc.studio",
  },

  metadataBase: new URL("https://citrusarc.studio"),

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  other: {
    "application-name": "CitrusArc Studio",
    "theme-color": "#F84901",
    "og:locale": "en_MY",
    "og:type": "website",
    "ai-summary":
      "CitrusArc Studio is a full-service creative agency specializing in branding, design, and digital experiences for ambitious brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KMB66XBXLG"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KMB66XBXLG');
          `}
        </Script>
        <Script
          id="ld-json-org" // // unique ID for clarity
          type="application/ld+json"
          strategy="afterInteractive" // // ensures it loads after hydration
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CitrusArc Studio",
              alternateName: "CitrusArc",
              url: "https://citrusarc.studio",
              logo: "https://citrusarc.studio/Images/brand-logo.png",
              sameAs: [
                "https://www.instagram.com/citrusarc.studio",
                "https://www.linkedin.com/company/citrusarc",
                "https://www.behance.net/citrusarc",
              ],
              description:
                "CitrusArc Studio is a creative agency specializing in branding, design, and digital experiences for ambitious brands. Based in Malaysia, we help businesses express their stories through bold visuals and meaningful design.",
              foundingDate: "2023",
              founder: {
                "@type": "Person",
                name: "CitrusArc Studio Team",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "citrusarc.studio@gmail.com",
                contactType: "Customer Service",
                availableLanguage: ["English", "Malay"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "MY",
                addressLocality: "Shah Alam",
                addressRegion: "Selangor",
              },
              areaServed: {
                "@type": "Country",
                name: "Malaysia",
              },
              makesOffer: {
                "@type": "OfferCatalog",
                name: "Creative Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Brand Identity Design",
                      description:
                        "Logo design, visual systems, and brand guidelines to define your brand’s voice and visuals.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web & Digital Design",
                      description:
                        "Designing high-performing websites and digital experiences that engage audiences.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Creative Strategy & Content",
                      description:
                        "Helping brands communicate their story through design, motion, and digital storytelling.",
                    },
                  },
                ],
              },
              "@id": "https://citrusarc.studio/#organization",
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="relative antialiased overflow-x-hidden overflow-y-auto max-w-full bg-gradient-to-br from-orange-950 via-orange-900 to-orange-700"
      >
        <Navbar />
        <main className="w-full max-w-full">{children}</main>
        <footer className="flex flex-col py-8 sm:py-0 w-full items-center justify-center text-center text-orange-600">
          <div className="flex flex-col sm:flex-row sm:px-10 w-full items-center justify-between order-2 sm:order-1 text-white/50">
            <p>© {new Date().getFullYear()} CITRUS ARC STUDIO</p>
            <p>202503267271 (003780123-A)</p>
          </div>
          <ScrollToTop href="/" className="order-1 sm:order-2">
            <h2 className="text-6xl sm:text-[180px] font-bold leading-none translate-y-[-18px]">
              CITRUS ARC STUDIO
            </h2>
          </ScrollToTop>
        </footer>
      </body>
    </html>
  );
}
