import type { Metadata } from "next";
import { Lora, Syne, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://asfak.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Asfak Ahamed Chowdhury — Strategist, Operations & Geopolitical Observer",
    template: "%s · Asfak Ahamed Chowdhury",
  },
  description:
    "Dhaka-based strategist, operations professional, and geopolitical observer. Writing about what power, technology, and market forces mean for people building in Bangladesh and beyond.",
  keywords: [
    "Bangladesh",
    "Dhaka",
    "geopolitics",
    "strategy",
    "operations",
    "AI",
    "tech",
    "Substack",
    "business analysis",
    "Asfak Ahamed Chowdhury",
  ],
  authors: [{ name: "Asfak Ahamed Chowdhury", url: siteUrl }],
  creator: "Asfak Ahamed Chowdhury",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Asfak Ahamed Chowdhury",
    title: "Asfak Ahamed Chowdhury — Strategist & Geopolitical Observer",
    description:
      "Dhaka-based strategist writing about power, technology, and market forces in Bangladesh.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Asfak Ahamed Chowdhury — The Dhaka Lens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asfakahamedc",
    creator: "@asfakahamedc",
    title: "Asfak Ahamed Chowdhury — Strategist & Geopolitical Observer",
    description:
      "Dhaka-based strategist writing about power, technology, and market forces in Bangladesh.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${syne.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
