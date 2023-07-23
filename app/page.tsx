import { Inter } from 'next/font/google'
import Form from '@/components/Form'
import type OpenAI from 'openai'

const inter = Inter({ subsets: ['latin'] })

function getBaseURL() {
  if (typeof process.env.VERCEL_URL === 'string') {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'http://localhost:3000'
}

export default async function Home() {
  const modelsList = (await (
    await fetch(`${getBaseURL()}/api/models`)
  ).json()) as OpenAI.ModelsPage
  // console.log(modelsList)
  return (
    <main className={inter.className}>
      <Form modelsList={modelsList} />
    </main>
  )
}
