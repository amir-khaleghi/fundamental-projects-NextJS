import { NextResponse } from 'next/server';
// import database
import db from '@/utils/db';

/* Get __________________________________________________ */
export const GET = async (request: Request) => {
  const data = await db.person.findMany({});
  return NextResponse.json({ data: data });
};
/* Post _________________________________________________ */
export const POST = async (request: Request) => {
  const data = await request.json();
  const todo = await db.person.create({
    data,
  });

  return NextResponse.json({ message: todo });
};

// ──────────────────────────────────────────────────── 🟩 ─
import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json({ message: 'GET request handled' });
  } else if (req.method === 'POST') {
    // Handle POST request
    const data = req.body;
    res.status(200).json({ message: 'POST request handled', data });
  } else {
    // Handle other HTTP methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
