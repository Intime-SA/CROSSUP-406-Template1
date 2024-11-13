import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/redux/lib-redux/ReduxProvider";
import { ThemeProvider } from "@/components/providers/providers";
import { FontProvider } from "@/components/providers/fontProvider";

export const metadata: Metadata = {
  title: "CrossUp - Templates",
  description:
    "Desarrollo en codigo de templates para tienda nube, nueva version de producto",
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
