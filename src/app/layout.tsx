
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Home from "./page";

import Footers from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Equity-Bcdc",
  description: "Generated by create next app",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        
        <Home/></body>
      
        
    </html>
  );
}
