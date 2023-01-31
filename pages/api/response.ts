import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

type RequestData = {
  currentModel: string;
  message: string;
};

type ResponseData = {
  bot?: string | undefined;
  message?: unknown | string;
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { currentModel, message } = req.body as RequestData;
    const response = await openai.createCompletion({
      model: `${currentModel}`,
      prompt: `${message}`,
      temperature: 0.2,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    res.status(200).json({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error || 'Something went wrong' });
  }
}
