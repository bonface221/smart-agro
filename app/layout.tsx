import { BASE_URL as url } from "@app/config/config";

import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import "./globals.scss";
import { Providers } from "./providers";

const gothic = Gothic_A1({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={gothic.className}
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
