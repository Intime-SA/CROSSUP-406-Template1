import type { Metadata } from "next";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/providers/providers";
import { FontProvider } from "@/components/providers/fontProvider";
import { ReduxProvider } from "@/redux/lib-redux/ReduxProvider";
import { routing } from "@/i18n/routing";
import { use } from "react";
import "../globals.css";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  console.log(locale);

  return {
    title: "CrossUp - Templates",
    description:
      "Desarrollo en código de templates para tienda nube, nueva versión de producto",
  };
}

export default function RootLayout({ children, params }: Props) {
  const { locale } = use(params);

  // Validar el `locale`
  if (!routing.locales.includes(locale as "es" | "pt")) {
    notFound();
  }

  // Obtener los mensajes de internacionalización
  const messages = use(getMessages());

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen font-sans bg-background text-foreground font-sans">
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
