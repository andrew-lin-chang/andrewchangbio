import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Chang Portfolio",
  description: "Andrew Chang is an Electrical and Computer Engineering student at UT Austin. Check out some of his work here.",
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
