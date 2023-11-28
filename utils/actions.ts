'use server';
import { revalidatePath } from 'next/cache';
import db from './db';
import { exec, execSync } from 'child_process';

// import convert from '@/utils/convertFileToDataUrl';

// ─── New To Do ────────────────────────────────────── 🟩 ─

// export const newPerson = async (formData) => {
//   const name = formData.get('name');
//   const age = Number(formData.get('age'));

//   const image = formData.get('image');
//   // const imageUrl = await convert(image);

//   const imageUrl = URL.createObjectURL(image);

//   console.log(`this is imageUrl : ${imageUrl}`);
//   const person = await db.person.create({
//     data: {
//       img: imageUrl,
//       name: name,
//       age: age,
//     },
//   });

// ─── New To Do ────────────────────────────────────── 🟩 ─

export const newPerson = async (formData) => {
  const name = formData.get('name');
  const age = Number(formData.get('age'));

  const image = formData.get('image');
  // const imageUrl = await convert(image);

  const imageBlob = URL.createObjectURL(image);
  console.log(imageBlob);

  // const imageUrl = URL.createObjectURL(imageBlob);

  console.log(`this is imageUrl : ${imageBlob}`);
  const person = await db.person.create({
    data: {
      // img: imageBlob,
      name: name,
      age: age,
    },
  });

  /**
   * //NOTE: soft refresh => not refresh the page but expire the cache of that page which then forces it to go refresh its data.
   * Clean the cache
   */

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

// const executeCommand = (command) => {
//   return new Promise((resolve, reject) => {
//     exec(command, (error, stdout, stderr) => {
//       if (error) {
//         reject(error);
//         return;
//       }

//       resolve({ stdout, stderr });
//     });
//   });
// };

// ──────────────────────────────────────────────────── 🟩 ─
// ─── Complete person ──────────────────────────────────── 🟩 ─

// export const completeperson = async (id) => {
//   // Get the current person to check its "completed" field
//   const person = await db.person.findUnique({
//     where: { id },
//     select: {
//       completed: true,
//     },
//   });

//   if (person) {
//     // Toggle the "completed" field
//     const updatedCompleted = !person.completed;
//     // Update the "completed" field with the new value
//     await db.person.update({
//       where: { id },
//       data: {
//         completed: updatedCompleted,
//       },
//     });

//     revalidatePath('/persons');
//   }
// };

// ──────────────────────────────────────────────────── 🟩 ─
// ──────────────────────────────────────────────────── 🟩 ─
// ─── Archive person ──────────────────────────────────── 🟩 ─

// export const archiveperson = async (id) => {
//   await db.person.delete({
//     where: { id },
//   });

//   revalidatePath('/persons');
// };
