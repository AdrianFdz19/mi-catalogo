import Header from "./components/Header";
import { Suspense } from "react";
import "./globals.css"; // Ajusta la ruta según tu estructura

export const metadata = {
  title: "Mi Catálogo - Tecnología & Seguridad",
  description: "Catálogo de productos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-slate-50 text-slate-900">
        <Suspense fallback={
          <header className="h-16 w-full border-b border-slate-200 bg-white/80" />
        }>
          <Header />
        </Suspense>
          {children}
      </body>
    </html>
  );
}