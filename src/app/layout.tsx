import type { Metadata } from "next";
import { Rokkitt, Chivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/schema/json-ld";

const rokkitt = Rokkitt({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const chivo = Chivo({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Freeze Dry Lab — Independent Reviews for Home Freeze Dryers",
    template: "%s | Freeze Dry Lab",
  },
  description:
    "Honest reviews, buying guides, and owner tutorials for home freeze dryers. We compare every Harvest Right model, cover accessories, and explain what the manufacturers don't tell you.",
  metadataBase: new URL("https://www.freezedrylab.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Freeze Dry Lab",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${rokkitt.variable} ${chivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <OrganizationSchema />
        <WebSiteSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
