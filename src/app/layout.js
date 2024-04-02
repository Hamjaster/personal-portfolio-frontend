import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraWrapper, ContextWrapper } from "@/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hamza Shah | Developer Portfolio",
  description: "A full stack developer portfolio delivering web solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ChakraWrapper>
        <ContextWrapper>
          <body className={inter.className}>{children}</body>
        </ContextWrapper>
      </ChakraWrapper>
    </html>
  );
}
