import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Treina-Dev - Transforme sua carreira em programação",
  description: "Aprenda as tecnologias mais demandadas do mercado com uma metodologia prática e eficiente. Mais de 200.000 pessoas já mudaram suas vidas conosco.",
  keywords: "programação, flutterflow, android, react-expo, react-native, desenvolvimento, cursos, tecnologia, javascript, react, node.js, python, java",
  authors: [{ name: "Treina-Dev" }],
  // Configurações Open Graph para compartilhamento em redes sociais
  openGraph: {
    title: "Treina-Dev - Transforme sua carreira em programação",
    description: "Aprenda as tecnologias mais demandadas do mercado com uma metodologia prática e eficiente.",
    url: "https://www.treinadev.com.br", // Substitua pelo URL real do seu site
    siteName: "Treina-Dev",
    images: [
      {
        url: "http://treina-dev-site.vercel.app/mobile.png", // Substitua pelo URL da sua imagem Open Graph
        width: 1200,
        height: 630,
        alt: "Treina-Dev - Transforme sua carreira em programação",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  // Configurações para Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Treina-Dev - Transforme sua carreira em programação",
    description: "Aprenda as tecnologias mais demandadas do mercado com uma metodologia prática e eficiente.",
    images: ["http://treina-dev-site.vercel.app/mobile.png"], // Substitua pelo URL da sua imagem para Twitter Card
  },
  // Configuração de ícones (favicon) com cache busting
  icons: {
    // Adicione um parâmetro de versão para forçar a atualização do favicon.
    // Altere o valor de 'v' (ex: para a data atual) toda vez que o favicon for atualizado.
    icon: '/favicon.ico?v=20250711', // Exemplo: v=AAAA-MM-DD
    shortcut: '/favicon.ico?v=20250711', // Geralmente o mesmo que o ícone principal
    apple: '/apple-touch-icon.png', // Se você tiver um Apple Touch Icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <ClerkProvider > 
        {/* appearance={{ baseTheme: dark }} */}
        <div className="flex h-full flex-col md:overflow-hidden">
        {children}
        </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
