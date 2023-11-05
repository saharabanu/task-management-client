"use client";

import "./globals.css";
import Providers from "@/lib/Providers";

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
}
