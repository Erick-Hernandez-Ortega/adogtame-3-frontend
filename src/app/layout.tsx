import type { Metadata, Viewport } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: "Adogtame - Adopción de Mascotas",
  description: "Descubre Adogtame, tu plataforma de adopción de mascotas. Regístrate, conecta y encuentra a tu compañero peludo ideal. Sube perfiles de mascotas necesitadas y bríndales un hogar amoroso. ¡Únete hoy a nuestra comunidad y haz la diferencia en las vidas de las mascotas en Adogtame!",
  icons: { icon: "img/logos/ADOGTAME_LOGO.png" }
};

export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
}
// prueba
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body style={{ backgroundColor: '#f2f2f2' }}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
