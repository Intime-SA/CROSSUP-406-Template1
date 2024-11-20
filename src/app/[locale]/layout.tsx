import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/redux/lib-redux/ReduxProvider";
import { ThemeProvider } from "@/components/providers/providers";
import { FontProvider } from "@/components/providers/fontProvider";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

// Define the type for supported locales
type SupportedLocale = 'es' | 'pt';

// Define a type for the routing object
type RoutingConfig = {
  locales: readonly SupportedLocale[];
  defaultLocale: SupportedLocale;
  // Add other properties as needed
};

// Cast the routing object to our defined type
const typedRouting = routing as RoutingConfig;

export const metadata: Metadata = {
  title: "CrossUp - Templates",
  description:
    "Desarrollo en codigo de templates para tienda nube, nueva version de producto",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Await the params object
  const { locale } = await params;

  // Type guard function to check if the locale is supported
  function isSupportedLocale(loc: string): loc is SupportedLocale {
    return typedRouting.locales.includes(loc as SupportedLocale);
  }

  // Ensure that the incoming `locale` is valid
  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
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
                <main className="flex-grow p-4">
                  <NextIntlClientProvider messages={messages}>
                    {children}
                  </NextIntlClientProvider>
                </main>
              </div>
            </FontProvider>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}