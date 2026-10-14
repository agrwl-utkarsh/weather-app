import type { Metadata, Viewport } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Weather™ - Redefine Your Weather',
  description: 'Highly customizable weather experience with dot matrix aesthetic',
};

export const viewport: Viewport = {
  themeColor: '#ff0000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen bg-background fg-foreground min-w-screen">
        {children}
      </body>
    </html>
  );
}