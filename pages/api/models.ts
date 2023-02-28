// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// const handler = async (req: Request) => {
//   const response = await openai.listModels();
//   const data = response.data;
//   return new Response(JSON.stringify(data), {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

// export default handler;

import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await openai.listModels();
  res.status(200).json(response.data);
};

export default handler;
