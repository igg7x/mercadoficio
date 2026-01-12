import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/fonts";
// import { Work_Sans, Open_Sans } from "next/font/google"
// const workSans = Work_Sans({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-work-sans",
// })

// const openSans = Open_Sans({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-open-sans",
// })

import ReactQueryProvider from "./providers/react-query-provider";

export const metadata: Metadata = {
  title: "MercadOficio",
  description: "Encuentra servicios de calidad para cada necesidad. Más de 10,000 profesionales satisfechos.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ReactQueryProvider>
        {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}

//  className={`${workSans.variable} ${openSans.variable} antialiased`}
// className={`${geistSans.variable} ${geistMono.variable} antialiased`}