import type { Metadata } from "next";
import "./globals.css";
import { ThemeToggle } from "@/components/ui-templates/ThemeToggle";
import { ReduxProvider } from "@/redux/lib-redux/ReduxProvider";
import { ThemeProvider } from "@/components/providers/providers";

import Documentation from "@/components/ui-documentation/Documentation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CrossUp-406 Template 1",
  description: "Desarrollo en codigo de templates para tienda nube",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen font-sans bg-background text-foreground font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>
            <div className="flex flex-col min-h-screen">
              <header className="p-4 bg-secondary text-secondary-foreground flex justify-between items-center">
                <Image
                  src="https://downloads.intercomcdn.com/i/o/567676/1521f5674a14451eb4025d0d/6093c828cea2f5da2d68aa4eed94585a.png"
                  alt=""
                  width={200}
                  height={50}
                />
                <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  <Documentation />
                </div>
              </header>
              <main className="flex-grow p-4">{children}</main>

              <footer className="p-4 bg-muted text-muted-foreground">
                <p>© 2024 Ramiro Arce</p>
              </footer>
            </div>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
