import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/providers";
import { FontProvider } from "@/components/providers/fontProvider";
import { ReduxProvider } from "@/redux/lib-redux/ReduxProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CrossUp - Templates",
  description:
    "Desarrollo en código de templates para tienda nube, nueva versión de producto",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body
        className={`min-h-screen font-sans bg-background text-foreground ${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>
            <FontProvider>
              <div className="flex flex-col min-h-screen">
                <main className="flex-grow p-4">{children}</main>
              </div>
            </FontProvider>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
