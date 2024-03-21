import type { Metadata } from "next";
import "./globals.css";
import {
  biroScript,
  biroScriptUS,
  messinaSans,
  rightGrotesk,
} from "@/utils/custom-fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://ape-nft-murex.vercel.app"),
  title: "Ape NFT",
  description:
    "Mint your exclusive APE-inspired NFTs and join a vibrant community of creators and collectors on our platform.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icons/favicon-dark.svg",
        href: "/icons/favicon-dark.svg",
      },

      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/favicon-light.svg",
        href: "/icons/favicon-light.svg",
      },
    ],
  },
  openGraph: {
    title: "Ape NFT",
    description:
      "Mint your exclusive APE-inspired NFTs and join a vibrant community of creators and collectors on our platform.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${messinaSans.variable} ${biroScript.variable} ${biroScriptUS.variable} ${rightGrotesk.className}`}
      >
        {children}
      </body>
    </html>
  );
}
