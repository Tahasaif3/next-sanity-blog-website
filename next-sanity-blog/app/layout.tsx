import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head';
import Script from 'next/script';

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
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="keywords" content="CSS,C,SCSS,NEXT,HTML,JAVASCRIPT,TYPESCIRPT,TECHNOLOGY,ARTIFICAL INTELLIGENCE,PYTHON,SANITY,TAILWIND CSS,REACT" />
        <Script
          async
          src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4686305629312312'}
          crossOrigin="anonymous"
        />
      </Head>
      <body className="min-h-screen bg-gray-100 text-gray-900">
      <Analytics />
        {children}
      </body>
    </html>
  );
}
