import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const firaCode = Fira_Code({ subsets: ["latin"], variable: '--font-fira-code' });

export const metadata: Metadata = {
  title: "Sayeesh Naik | Digital Marketer & Content Strategist",
  description: "A comprehensive look at my work in building 360-degree digital campaigns. From social media management to advanced Google Analytics, explore how I bridge the gap between brands and their audiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans bg-[#121212] text-white antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
