import type { Metadata } from "next"

const title = "SuiWars: Rise of Nations"
const description =
  "Build, Battle, Conquer: Forge your empire from the Stone Age to the Quantum Age in this epic real-time strategy game on the Sui blockchain"
const url = "https://suiwars.io"

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "SuiWars",
    "blockchain game",
    "RTS",
    "strategy game",
    "Sui blockchain",
    "NFT game",
    "play-to-earn",
    "web3 gaming",
  ],
  authors: [{ name: "SuiWars Team" }],
  creator: "SuiWars Team",
  publisher: "SuiWars",
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SuiWars: Rise of Nations - Build, Battle, Conquer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
    creator: "@SuiWarsGame",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${url}/site.webmanifest`,
}
