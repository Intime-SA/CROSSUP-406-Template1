import type { Metadata } from "next";
import "../globals.css";
import { ReduxProvider } from "@/redux/lib-redux/ReduxProvider";
import { ThemeProvider } from "@/components/providers/providers";
import { FontProvider } from "@/components/providers/fontProvider";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CrossUp - Templates",
  description:
    "Desarrollo en codigo de templates para tienda nube, nueva version de producto",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "es" | "pt")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
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
                  <NextIntlClientProvider messages={messages} locale={locale}>
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
