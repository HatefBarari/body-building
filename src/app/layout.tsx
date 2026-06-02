import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { GsapScrollAnimations } from "@/components/providers/gsap-provider";
import { AnimatedBackground } from "@/components/layout/animated-background";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BRAND } from "@/lib/constants";
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
  title: `${BRAND.name} | ${BRAND.tagline}`,
  description:
    "باشگاه پریمیوم بدنسازی و فیتنس — تمرین، تغذیه، مکمل و پوشاک لوکس در یک تجربه سایبر-لوکس.",
  keywords: ["fitness", "gym", "bodybuilding", "BANDGYM", "لوکس"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <SmoothScrollProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-4 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
          >
            پرش به محتوا
          </a>
          <AnimatedBackground />
          <CustomCursor />
          <GsapScrollAnimations />
          <Header />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
