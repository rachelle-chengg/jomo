import "./globals.css";
import { Fraunces, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Schools — Experience JOMO",
  description:
    "A whole-school approach to digital wellness. JOMO equips schools to lead students toward healthy tech habits and Christ-centered living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
