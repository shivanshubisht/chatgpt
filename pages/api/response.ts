import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream';

type RequestData = {
  currentModel: string;
  message: string;
};

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing env var from OpenAI');
}

export const config = {
  runtime: 'edge',
};

const handler = async (req: Request): Promise<Response> => {
  const { currentModel, message } = (await req.json()) as RequestData;

  if (!message) {
    return new Response('No message in the request', { status: 400 });
  }

  const payload: OpenAIStreamPayload = {
    model: 'gpt-3.5-turbo',
    // model: `${currentModel}`,
    messages: [{ role: 'user', content: message }],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 200,
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload);
  return new Response(stream);
};

export default handler;
