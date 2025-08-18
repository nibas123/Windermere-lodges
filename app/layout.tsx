import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Windermere Lodges",
  description: "Created by coffee_coders",
  generator: "Ketan Kumar Shrivastava",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const peeps =  await prisma.user.findMany();
  // console.log(peeps)
  return (
    <html lang="en">
      <body>
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
