import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Living Edge",
  description: "LivingEdge, Crafting Dreams and Interiors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased dark`}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
