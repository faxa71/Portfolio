import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Deen.dsgn — Product / UX/UI дизайнер",
  description: "Создаю цифровые интерфейсы, которые интуитивны и функциональны.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans bg-bg text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
