import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dr. Rafael Mendes — Psicólogo Clínico",
    template: "%s | Dr. Rafael Mendes",
  },
  description:
    "Psicólogo Clínico em São Paulo e online. Atendimento humanizado para ansiedade, depressão, relacionamentos, burnout e autoconhecimento. CRP 06/12345.",
  keywords: [
    "psicólogo", "psicólogo clínico", "terapia", "psicoterapia",
    "ansiedade", "depressão", "saúde mental", "São Paulo", "online",
  ],
  authors: [{ name: "Dr. Rafael Mendes" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Dr. Rafael Mendes — Psicólogo Clínico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Nunito:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
