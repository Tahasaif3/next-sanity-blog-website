import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TechVista Blog',
  description: 'Welcome to TechVista, a blog about technology and innovation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gray-100 text-gray-900">
      <Analytics />
        {children}
      </body>
    </html>
  );
}
