import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "my-color",
  description: "Generate your own color",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
