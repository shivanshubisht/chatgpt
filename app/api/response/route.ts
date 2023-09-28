import OpenAI from 'openai'

const openai = new OpenAI()

type RequestData = {
  currentModel: string
  message: string
}

export const runtime = 'edge'

export async function POST(request: Request) {
  const { message } = (await request.json()) as RequestData

  console.log(message)

  if (!message) {
    return new Response('No message in the request', { status: 400 })
  }

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: message }],
    max_tokens: 4096,
    stream: true,
  })

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder()

      for await (const part of completion) {
        const text = part.choices[0]?.delta.content ?? ''
        const chunk = encoder.encode(text)
        controller.enqueue(chunk)
      }
      controller.close()
    },
  })

  return new Response(stream)
}
