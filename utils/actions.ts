'use server';
import { revalidatePath } from 'next/cache';
import db from './db';
import { execSync } from 'child_process';

// ─── New To Do ────────────────────────────────────── 🟩 ─

export const newPerson = async (formData) => {
  const name = formData.get('name');
  const age = Number(formData.get('age'));

  const image = formData.get('image');
  // const imageUrl = await convert(image);

  const imageBlob = URL.createObjectURL(image);
  console.log(imageBlob);

  // const imageUrl = URL.createObjectURL(imageBlob);

  const person = await db.person.create({
    data: {
      // img: imageBlob,
      name: name,
      age: age,
    },
  });

  revalidatePath('/birthday-buddy');
};

// ─── Delete person ──────────────────────────────────── 🟩 ─

export const deletePerson = async (id) => {
  console.log(`delete id : ${id}`);
  await db.person.delete({
    where: { id },
  });

  revalidatePath('/birthday-buddy');
};
// ──────────────────────────────────────────────────── 🟩 ─
// ─── Clear List ──────────────────────────────────── 🟩 ─

export const clearList = async () => {
  console.log('clearing list ...');
  await db.person.deleteMany({});

  revalidatePath('/birthday-buddy');
};
// ──────────────────────────────────────────────────── 🟩 ─
// ─── Reset List ──────────────────────────────────── 🟩 ─

export const resetList = async () => {
  console.log('reset list');
  try {
    execSync('npx prisma migrate reset --force ');
    console.log('done');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    revalidatePath('/birthday-buddy');
  }
};
