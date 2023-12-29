import { BASE_URL as url } from "@app/config/config";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          backgroundColor: "var(--chakra-colors-brand-greenBg)",
        }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Smart Agro",
  description: "Pure Agriculture and Organic Formulations",
  openGraph: {
    title: "Smart Agro",
    description: "Pure Agriculture and Organic Formulations",
    url: url,
  },
  keywords: ["Smart Agro"],
};
