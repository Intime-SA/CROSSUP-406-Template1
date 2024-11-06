import type { Metadata } from "next";
import "./globals.css";
import { ThemeToggle } from "@/components/ui-templates/ThemeToggle";
import CartComponent from "@/components/cart/CartComponent";
import { ReduxProvider } from "@/redux/ReduxProvider";
import { ThemeProvider } from "@/components/providers/providers";
import { montserrat } from "./fonts/fonts";
import Documentation from "@/components/ui-templates/Documentation";

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} font-sans`}
    >
      <body
        className={`min-h-screen font-sans bg-background text-foreground ${montserrat.variable} font-sans`}
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
                <img
                  src="https://downloads.intercomcdn.com/i/o/567676/1521f5674a14451eb4025d0d/6093c828cea2f5da2d68aa4eed94585a.png"
                  alt=""
                  width="200px"
                  height="50px"
                />
                <div className="flex items-center space-x-4">
                  <CartComponent />
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
