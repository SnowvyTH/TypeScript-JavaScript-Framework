// Root Layout
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Next App"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}