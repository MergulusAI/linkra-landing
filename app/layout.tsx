import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Linkra — Telekom, IT och webbdesign för företag",
  description:
    "Linkra hjälper företag med telekom, IT-lösningar och moderna hemsidor. Oberoende rådgivning och webbdesign till fast pris. Baserade i Varberg.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
