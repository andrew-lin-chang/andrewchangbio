import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Chang's Portfolio",
  description: "ECE student at UT Austin. Come check out my work!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`mx-auto max-w-4xl px-8 ${inter.className} bg-white dark:text-white dark:bg-black`}
      >
        <Providers attribute="class">
          <Header />
          <div className="my-6 min-h-[75vh]">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
