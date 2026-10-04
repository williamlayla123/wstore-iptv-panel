import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WStore IPTV Panel',
  description: 'Painel WStore para IPTV com gestão de clientes, revenda e M3U/M3U8',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
