import type { Metadata } from "next";
import "./globals.css";
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
        {children}
      </body>
    </html>
  );
}
