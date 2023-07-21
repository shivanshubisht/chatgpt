import { Inter } from 'next/font/google'
import Form from '@/components/Form'
import type OpenAI from 'openai'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const modelsList = (await (
    await fetch('http://localhost:3000/api/models')
  ).json()) as OpenAI.ModelsPage
  console.log(modelsList)
  return (
    <main className={inter.className}>
      <Form modelsList={modelsList} />
    </main>
  )
}
