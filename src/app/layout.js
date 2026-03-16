import { Cormorant_Garamond, Manrope } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../components/CartProvider";
import { WishlistProvider } from "../components/WishlistProvider";
import { CompareProvider } from "../components/CompareProvider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-geist-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Funiro Furniture",
  description: "Modern furniture for calm and livable spaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${cormorant.variable} antialiased`}
      >
        <CompareProvider>
          <WishlistProvider>
            <CartProvider>
              <Navbar />
              {children}
              <Footer />
            </CartProvider>
          </WishlistProvider>
        </CompareProvider>
      </body>
    </html>
  );
}
