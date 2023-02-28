import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream';

type RequestData = {
  currentModel: string;
  message: string;
};

export const config = {
  runtime: 'edge',
};

const handler = async (req: Request): Promise<Response> => {
  try {
    const { currentModel, message } = (await req.json()) as RequestData;
    const response: OpenAIStreamPayload = {
      model: `${currentModel}`,
      prompt: `${message}`,
      temperature: 0.7,
      max_tokens: 300,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stream: true,
      n: 1,
    };

    const stream = await OpenAIStream(response);
    return new Response(stream);
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: error || 'Something went wrong' }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};

export default handler;
