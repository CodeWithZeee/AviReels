import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import LenisProvider from "./components/LenisProvider.tsx";
import { Inter } from "next/font/google";

export const metadata = {
  title: "AviReels | AI Videos That Tell & Sell",
  description:
    "We create ultra-realistic AI Videos and Reels featuring lifelike Avatars and Animated Characters",
};

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LenisProvider>
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
