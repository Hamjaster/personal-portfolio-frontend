import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraWrapper, ContextWrapper } from "@/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://hamzashah.me"),
  title: "Hamza Shah | Developer Portfolio",
  description: "A full stack developer portfolio delivering web solutions.",
  openGraph: {
    title: "Hamza Shah | Developer Portfolio",
    description:
      "I specialize in developing custom web solutions to businesses",
  },
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
