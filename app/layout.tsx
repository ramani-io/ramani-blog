import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramani Blog",
  description: "Blog posts for Ramani.io",
  // <meta name="robots" content="all" />

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* @todo favicon missing */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metadata.description ?? ''} />
        <meta name="robots" content="all" />
        {/* Add other meta tags as needed */}
      </Head>
      <body className={inter.className}>
        {" "}
        <Navigation />
        {children}
      </body>
    </html>
  );
}
