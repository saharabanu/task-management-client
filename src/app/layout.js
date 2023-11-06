"use client";

import ToastProvider from "@/lib/ToastProvider";
import "./globals.css";
import Providers from "@/lib/Providers";

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <ToastProvider>
          {children}
          </ToastProvider>
        </body>
      </html>
    </Providers>
  );
}
