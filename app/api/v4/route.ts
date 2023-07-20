import { NextResponse } from 'next/server'
import OpenAI from 'openai'

// const openai = new OpenAI()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
})

type RequestData = {
  currentModel: string
  message: string
}

export const runtime = 'edge'

export async function POST(request: Request) {
  const { message } = (await request.json()) as RequestData

  if (!message) {
    return new Response('No message in the request', { status: 400 })
  }

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: message }],
    stream: true,
  })

  const completionResult = []
  for await (const part of completion) {
    completionResult.push(part.choices[0]?.delta.content || '')
  }

  // Construct a response object with the completions
  const responseBody = completionResult.join('')
  console.log(responseBody)
  return new NextResponse(responseBody, { status: 200 })
}
