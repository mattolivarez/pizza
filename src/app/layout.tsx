import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "NYPD Pizza",
  description: "NYPD Wood Fire Stone Oven Pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="retro" lang="en">
      <body className="max-w-[2000px] max-h-full mx-auto bg-base-200">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
