import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../server/db/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  } else {
    const { name, email, message } = req.body;
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });
    res.status(201).json(contact);
  }
}
