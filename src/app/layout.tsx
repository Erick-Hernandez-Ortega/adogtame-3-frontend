import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Head from 'next/head'

export const metadata: Metadata = {
  title: "Adogtame - Adopción de Mascotas",
  description: "Descubre Adogtame, tu plataforma de adopción de mascotas. Regístrate, conecta y encuentra a tu compañero peludo ideal. Sube perfiles de mascotas necesitadas y bríndales un hogar amoroso. ¡Únete hoy a nuestra comunidad y haz la diferencia en las vidas de las mascotas en Adogtame!",
  icons: { icon: "img/ADOGTAME_LOGO.png" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        {children}
        {/* <StartPage /> */}
      </body>
    </html>
  );
}
