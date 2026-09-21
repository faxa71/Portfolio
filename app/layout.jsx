import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Deen.dsgn — Product / UX/UI дизайнер",
  description: "Создаю цифровые интерфейсы, которые интуитивны и функциональны.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="font-sans bg-bg text-white antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
