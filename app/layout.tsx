import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'windermere-lodges',
  description: 'Created with AI',
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
