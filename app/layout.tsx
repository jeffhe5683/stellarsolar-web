import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stellar Solar — Adelaide Solar & Battery Installation",
  description:
    "Premium solar, battery and maintenance solutions for Adelaide and South Australia. Clean installation, smart design and clear quotes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
