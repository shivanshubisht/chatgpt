import './globals.css'

export const metadata = {
  title: 'ChatGPT',
  description: 'A chatbot powered by GPT-3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
