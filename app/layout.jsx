import "./globals.css";

export const metadata = {
  title: "Deen.dsgn — Product / UX/UI дизайнер",
  description: "Создаю цифровые интерфейсы, которые интуитивны и функциональны.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="font-sans bg-bg text-white antialiased">
        {children}
      </body>
    </html>
  );
}
