import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "LATAM Agile Delivery",
  description:
    "Wesley Gomes da Silva — Agile Delivery Manager | AI-Driven Software Delivery | Digital Products & Remote Teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
