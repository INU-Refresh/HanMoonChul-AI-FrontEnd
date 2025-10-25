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
  title: "한문철 AI - 교통사고 영상 분석 플랫폼",
  description: "교통사고 영상을 AI가 분석하여 과실비율, 분석이유, 관련 판례를 제공하는 분쟁심의 지원 플랫폼",
  keywords: ["교통사고", "AI분석", "과실비율", "분쟁심의", "법률지원", "영상분석", "판례"],
  authors: [{ name: "Team Refresh" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "한문철 AI - 교통사고 영상 분석 플랫폼",
    description: "AI가 교통사고 영상을 분석하여 과실비율과 법적 근거를 제공합니다",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
