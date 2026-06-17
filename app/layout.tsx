import type { Metadata } from "next";
import { Montserrat, Roboto_Slab } from "next/font/google";
import SiteLayout from "@/components/layout/site-layout";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.springofvirtue.com"),
  title: {
    default: "SVIS - Home",
    template: "%s | Spring of Virtue Integrated School",
  },
  description:
    "We believe that our students should have the best possible education, and we are committed to providing them with the resources they need to succeed.",
  keywords: [
    "SVIS",
    "Spring of Virtue Integrated School",
    "Spring of Virtue",
    "School",
    "Taguig",
  ],
  openGraph: {
    type: "website",
    url: "https://www.springofvirtue.com/",
    title: "SVIS",
    description: "Spring of Virtue Integrated School, Inc.",
    images: ["/hero.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${robotoSlab.variable}`}>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
