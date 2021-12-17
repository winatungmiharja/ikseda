import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
});

const makeColumn = (title, content) => {
  return {
    object: 'block',
    type: 'column_list',
    column_list: {
      children: [
        {
          object: 'block',
          type: 'column',
          column: {
            children: [
              {
                object: 'block',
                type: 'paragraph',
                paragraph: {
                  text: [
                    {
                      type: 'text',
                      text: {
                        content: title,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          object: 'block',
          type: 'column',
          column: {
            children: [
              {
                object: 'block',
                type: 'paragraph',
                paragraph: {
                  text: [
                    {
                      type: 'text',
                      text: {
                        content: content,
                      },
                      annotations: {
                        color: 'orange_background',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
};

const makeHeading = (type, content) => {
  return {
    object: 'block',
    type: `heading_${type}`,
    [`heading_${type}`]: {
      text: [
        {
          type: 'text',
          text: {
            content: content,
          },
        },
      ],
    },
  };
};

const makeParagraph = (content) => {
  return {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: content,
          },
          annotations: {
            color: 'gray_background',
          },
        },
      ],
    },
  };
};

const makeDivider = () => {
  return {
    type: 'divider',
    divider: {},
  };
};

const makeImage = (desc, url) => {
  return {
    object: 'block',
    type: 'column_list',
    column_list: {
      children: [
        {
          object: 'block',
          type: 'column',
          column: {
            children: [
              {
                object: 'block',
                type: 'paragraph',
                paragraph: {
                  text: [
                    {
                      type: 'text',
                      text: {
                        content: desc,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          object: 'block',
          type: 'column',
          column: {
            children: [
              {
                object: 'block',
                type: 'image',
                image: {
                  type: 'external',
                  external: {
                    url: url,
                  },
                },
              },
            ],
          },
        },
        {
          object: 'block',
          type: 'column',
          column: {
            children: [
              {
                object: 'block',
                type: 'paragraph',
                paragraph: {
                  text: [
                    {
                      type: 'text',
                      text: {
                        content: `url : ${url}`,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
};

const makeBulletedList = (data) => {
  if (data.length > 0) {
    return data.map((item) => ({
      object: 'block',
      type: 'bulleted_list_item',
      bulleted_list_item: {
        text: [
          {
            type: 'text',
            text: {
              content: item,
              link: null,
            },
          },
        ],
      },
    }));
  } else return [makeParagraph('Tidak Ada')];
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: `${req.method} requests are not allowed`,
      success: false,
    });
  }
  try {
    const { user, kegiatan, data, dokumen } = JSON.parse(req.body);
    await notion.pages.create({
      parent: {
        database_id: String(process.env.NEXT_PUBLIC_NOTION_FORM_ID),
      },
      properties: {
        Name: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: { content: user.nama },
            },
          ],
        },
        Email: {
          type: 'email',
          email: user.email,
        },
      },
      children: [
        makeHeading(1, 'Data Pengisi'),

        makeParagraph(`Pengisian data dilakukan oleh : ${user.pengisi}`),
        makeColumn('Nama', user.nama),
        makeColumn('Email', user.email),
        makeColumn('No Handphone', user.hp),
        makeColumn('line', user.line),
        makeDivider(),
        makeColumn('NPM', user.npm),
        makeColumn('Kegiatan', user.kegiatan),

        makeDivider(),

        makeHeading(3, 'Data Kegiatan'),
        makeParagraph(
          `Kegiatan berlangsung dari ${data.tanggalMulai} sampai ${data.tanggalAkhir}`
        ),
        makeColumn('Nama Kegiatan', kegiatan.namaKegiatan),
        makeColumn('Penyelenggara Kegiatan', kegiatan.penyelenggara),
        makeColumn('Kategori', kegiatan.kategori),
        makeColumn('Peserta', kegiatan.peserta),
        makeColumn('Jumlah Peserta', kegiatan.jumlahPeserta),
        makeColumn('Website Kegiatan', kegiatan.website),
        makeDivider(),
        makeColumn('Keikutsertaan', kegiatan.keikutsertaan),
        makeColumn('Tim', kegiatan.tim),

        makeDivider(),

        makeHeading(3, 'Data Pencapaian'),
        ...makeBulletedList(data.pencapaian),

        makeDivider(),

        makeHeading(3, 'Dokumen Pendukung'),
        makeImage('Undangan', dokumen.undangan),
        makeImage('Dokumentasi', dokumen.dokumentasi),
        makeImage('Sertifikat', dokumen.sertifikat),
      ],
    });

    res.status(201).json({ message: 'Success Created Notion', success: true });
  } catch (error) {
    res.status(500).json({ message: JSON.stringify(error), success: false });
  }
}
