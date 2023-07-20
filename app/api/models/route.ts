import OpenAI from 'openai'

const openai = new OpenAI()

export async function GET(request: Request) {
  const response = await openai.models.list()
  response.data.sort((a, b) => a.id.localeCompare(b.id))

  return new Response(JSON.stringify(response))
}
