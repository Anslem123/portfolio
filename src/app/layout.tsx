import type { Metadata, Viewport } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CursorGlow }   from "@/components/providers/CursorGlow";
import { Header }       from "@/components/layout/Header";
import { Footer }       from "@/components/layout/Footer";
import { seo }          from "@/data/seo";

const montserrat = Montserrat({
  subsets:  ["latin"],
  variable: "--font-montserrat",
  display:  "swap",
  weight:   ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets:  ["latin"],
  variable: "--font-jetbrains-mono",
  display:  "swap",
  weight:   ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default:  seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords:    seo.keywords,
  authors:     [{ name: seo.author, url: seo.siteUrl }],
  creator:     seo.author,
  openGraph: {
    type:      "website",
    locale:    seo.locale,
    url:       seo.siteUrl,
    siteName:  seo.author,
    title:     seo.defaultTitle,
    description: seo.description,
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.defaultTitle }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       seo.defaultTitle,
    description: seo.description,
    images:      [seo.ogImage],
    creator:     seo.twitterHandle,
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F4FA" },
    { media: "(prefers-color-scheme: dark)",  color: "#08080F" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <CursorGlow />
          <Header />
          <main className="flex-1 pt-[72px]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
