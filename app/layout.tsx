import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "29N a ciegas · Compara propuestas sin ver siglas",
  description:
    "Las propuestas principales de los partidos para las elecciones generales del 29 de noviembre de 2026, explicadas con palabras sencillas y sin saber quién las propone. Elige las que te convencen y descubre con quién coincides.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f4ef",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
