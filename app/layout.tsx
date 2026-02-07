import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VetMed",
  description: "A supply management system for veterinary clinics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}

