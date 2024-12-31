import "../globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import {
  VisualEditing,
  toPlainText,
  type PortableTextBlock,
} from "next-sanity";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";

import AlertBanner from "./alert-banner";
import PortableText from "./portable-text";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await sanityFetch({ query: settingsQuery });
  const footer = data?.footer || [];
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en" className={`${inter.variable} bg-white text-black`}>
      <body>
        <section className="min-h-screen">
          {isDraftMode && <AlertBanner />}
          <main>{children}</main>
          <footer className="bg-accent-1 border-accent-2 border-t">
            <div className="container mx-auto px-5">
              {footer.length > 0 ? (
                <PortableText
                  className="prose-sm text-pretty bottom-0 w-full max-w-none bg-white py-12 text-center md:py-20"
                  value={footer as PortableTextBlock[]}
                />
              ) : (
                <div className="container mx-auto px-4">
    <div className="flex flex-col items-center justify-between md:flex-row">
      <div className="text-center md:text-left md:w-1/2">
        <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
        <p className="text-gray-400">
          Thank you for visiting my blog! Subscribe to stay updated with the latest posts.
        </p>
        <form className="mt-6 flex w-full max-w-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 text-black rounded-l-lg focus:outline-none"
          />
          <button
            type="submit"
            className="bg-teal-500 px-6 py-2 rounded-r-lg text-white hover:bg-teal-600 transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 flex flex-col items-center md:items-end">
        <h3 className="text-2xl font-bold mb-4">Follow Me</h3>
        <div className="flex space-x-4">
          <Link
            href="#"
            className="bg-gray-700 p-3 rounded-full hover:bg-teal-500 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 5.072c-.75.33-1.564.553-2.417.655a4.176 4.176 0 001.835-2.306 8.343 8.343 0 01-2.63 1.008 4.156 4.156 0 00-7.073 3.789 11.78 11.78 0 01-8.56-4.34 4.144 4.144 0 001.287 5.536 4.136 4.136 0 01-1.882-.52v.052a4.155 4.155 0 003.33 4.07 4.185 4.185 0 01-1.878.071 4.157 4.157 0 003.882 2.89 8.34 8.34 0 01-5.155 1.777c-.335 0-.665-.02-.992-.057a11.764 11.764 0 006.377 1.872c7.652 0 11.834-6.34 11.834-11.833 0-.18-.004-.36-.012-.54A8.466 8.466 0 0022 5.072z" />
            </svg>
          </Link>
          <Link
            href="#"
            className="bg-gray-700 p-3 rounded-full hover:bg-teal-500 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.197 21V9h4.063v2.279h.058c.566-1.075 1.946-2.276 4.007-2.276 4.282 0 5.075 2.806 5.075 6.457V21h-4.063v-5.704c0-1.358-.026-3.108-1.892-3.108-1.893 0-2.182 1.478-2.182 3.01V21H9.197z" />
            </svg>
          </Link>
          <Link
            href="#"
            className="bg-gray-700 p-3 rounded-full hover:bg-teal-500 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.04c-5.514 0-9.96 4.446-9.96 9.96 0 4.385 2.844 8.102 6.784 9.44.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.76.6-3.34-1.33-3.34-1.33-.45-1.15-1.1-1.45-1.1-1.45-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.83.09-.64.35-1.08.64-1.33-2.21-.25-4.54-1.11-4.54-4.93 0-1.09.39-1.98 1.03-2.67-.1-.26-.45-1.3.1-2.7 0 0 .83-.27 2.72 1.02a9.3 9.3 0 014.95 0c1.89-1.29 2.72-1.02 2.72-1.02.55 1.4.2 2.44.1 2.7.64.69 1.03 1.58 1.03 2.67 0 3.83-2.34 4.67-4.56 4.92.36.31.68.93.68 1.88 0 1.36-.01 2.46-.01 2.8 0 .26.18.57.69.47A9.97 9.97 0 0022 12c0-5.514-4.446-9.96-9.96-9.96z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
    <div className="mt-12 text-center text-gray-400">
      © {new Date().getFullYear()} TechVista Blogs. All rights reserved.
    </div>
  </div>
              )}
            </div>
          </footer>
        </section>
        {isDraftMode && <VisualEditing />}
        <SpeedInsights />
      </body>
    </html>
  );
}
