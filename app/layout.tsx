import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { siteConfig } from "@/lib/site";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | Premium Performance Marketing`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "performance marketing",
    "paid ads agency",
    "Meta Ads",
    "Google Ads",
    "SEO",
    "lead generation",
    "branding",
    "growth marketing"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: siteConfig.name,
    founder: siteConfig.founder,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    sameAs: [siteConfig.linkedin, siteConfig.instagram],
    description: siteConfig.description,
    areaServed: "Worldwide",
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.parentCompany
    }
  };

  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
