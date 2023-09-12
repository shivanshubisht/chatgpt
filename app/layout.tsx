import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'ChatGPT',
  description: 'A chatbot powered by GPT',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
