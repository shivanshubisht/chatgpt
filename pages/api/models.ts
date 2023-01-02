import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await openai.listEngines();
    res.status(200).json(response.data);
}