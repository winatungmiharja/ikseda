import { Client } from '@notionhq/client';
import { NextApiRequest, NextApiResponse } from 'next';

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: `${req.method} requests are not allowed`,
      success: false,
    });
  }
  try {
    const { nama, email, nohp, pesan } = req.body;
    await notion.pages.create({
      parent: {
        database_id: String(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID),
      },
      properties: {
        Nama: {
          type: 'title',
          title: [{ type: 'text', text: { content: nama } }],
        },
        Email: {
          type: 'email',
          email: email,
        },
        'No Hp': {
          type: 'phone_number',
          phone_number: nohp,
        },
        Pesan: {
          type: 'rich_text',
          rich_text: [
            {
              text: {
                content: pesan,
              },
            },
          ],
        },
      },
    });

    res.status(201).json({ message: 'Success Created Notion', success: true });
  } catch (error) {
    res.status(500).json({ message: JSON.stringify(error), success: false });
  }
}
