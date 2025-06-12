import '../styles/globals.css'; // Asegúrate de que la ruta a tu CSS global es correcta

import { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>SonríeSalud | Armonización Orofacial y Odontología</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
            </head>
            <body>{children}</body>
          </html>
          );
}
