import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.linkragruppen.se"),
  title: "Linkra AB | Telekom, IT och affärsstöd",
  description:
    "Linkra hjälper företag att jämföra alternativ, förstå skillnader och välja rätt lösningar inom telekom, IT och affärsstöd.",
  applicationName: "Linkra AB",
  authors: [{ name: "Linkra AB" }],
  keywords: [
    "Linkra",
    "telekom",
    "IT",
    "affärsstöd",
    "mobilabonnemang",
    "företagsväxel",
    "fiber",
    "IoT",
    "WiFi",
    "hårdvara",
  ],
  openGraph: {
    title: "Linkra AB | Telekom, IT och affärsstöd",
    description:
      "Bättre överblick. Rätt beslut för verksamheten. Linkra hjälper företag att välja rätt lösningar inom telekom, IT och affärsstöd.",
    url: "https://www.linkragruppen.se",
    siteName: "Linkra AB",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linkra AB | Telekom, IT och affärsstöd",
    description:
      "Bättre överblick. Rätt beslut för verksamheten.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={inter.variable}>
      <body className="bg-[#06101d] text-white antialiased">{children}</body>
    </html>
  );
}