import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rodrigo Barreto | Frontend Engineer",
  description:
    "Frontend Engineer com 5+ anos de experiência em React, Next.js, TypeScript e React Native. Desenvolvimento de aplicações web e mobile escaláveis e de alta performance.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Desenvolvimento Web",
    "Software Engineer",
  ],
  authors: [{ name: "Rodrigo Barreto" }],
  creator: "Rodrigo Barreto",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://rodrigobarreto.dev",
    title: "Rodrigo Barreto | Frontend Engineer",
    description:
      "Frontend Engineer especializado em React, Next.js e TypeScript",
    siteName: "Rodrigo Barreto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigo Barreto | Frontend Engineer",
    description:
      "Frontend Engineer especializado em React, Next.js e TypeScript",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://rodrigobarreto.dev"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
