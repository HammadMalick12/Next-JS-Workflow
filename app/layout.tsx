
import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "NovaWeb | Modern Digital Solutions",
  description:
    "Modern web design, development, and digital solutions for growing businesses.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
