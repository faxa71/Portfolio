import "./globals.css";
import IntroScreen from "@/components/IntroScreen";

export const metadata = {
  metadataBase: new URL("https://faxriddeen.vercel.app"),
  title: "Deen.dsgn — Product / UX/UI дизайнер",
  description: "Создаю цифровые интерфейсы, которые интуитивны и функциональны.",
  openGraph: {
    title: "Deen.dsgn — Product / UX/UI дизайнер",
    description: "Создаю цифровые интерфейсы, которые интуитивны и функциональны.",
    url: "https://faxriddeen.vercel.app",
    siteName: "Deen.dsgn",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deen.dsgn — Product / UX/UI дизайнер",
    description: "Создаю цифровые интерфейсы, которые интуитивны и функциональны.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="font-sans bg-bg text-white antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <IntroScreen />
        {children}
      </body>
    </html>
  );
}
