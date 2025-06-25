import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Windermere Lodges',
  description: 'Created by coffee_coders',
  generator: 'Ketan Kumar Shrivastava',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
