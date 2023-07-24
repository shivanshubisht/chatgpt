import { Inter } from 'next/font/google'
import Form from '@/components/Form'
import type OpenAI from 'openai'

const inter = Inter({ subsets: ['latin'] })

function getBaseURL() {
  if (typeof process.env.VERCEL_URL === 'string') {
    return `https://chatgpt.shivanshu.in`
  }
  return 'http://localhost:3000'
}

export default async function Home() {
  const modelsList = (await (
    await fetch(`https://chatgpt.shivanshu.in/api/models`)
  ).json()) as OpenAI.ModelsPage
  // console.log(modelsList)
  return (
    <main className={inter.className}>
      <Form modelsList={modelsList} />
    </main>
  )
}
