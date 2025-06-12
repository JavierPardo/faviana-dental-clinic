import '../styles/globals.css'; // Asegúrate de que la ruta a tu CSS global es correcta

import { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SonríeSalud | Armonización Orofacial y Odontología</title>
        {/* En un proyecto real, aquí puedes añadir favicon, metatags SEO adicionales, etc. */}
      </head>
      <body>{children}</body>
    </html>
  );
}
