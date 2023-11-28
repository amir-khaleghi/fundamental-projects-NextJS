import { NextResponse } from 'next/server';
// import database
import db from '@/utils/db';

/* Get __________________________________________________ */
export const GET = async (request: Request) => {
  const persons = await db.person.findMany({});
  return NextResponse.json({ data: persons });
};
/* Post _________________________________________________ */
export const POST = async (request: Request) => {
  const data = await request.json();
  const person = await db.person.create({
    data,
  });

  return NextResponse.json({ message: person });
};
