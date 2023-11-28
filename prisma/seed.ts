// seed.js (or seed.ts if using TypeScript)
import db from '../utils/db';
const birthdayBuddy = [
  {
    id: '1b381-2c6e-4d09-ba',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D', // Assuming image1 is the path or URL to an image
    name: 'Lola Gardner',
    age: 29,
  },
  {
    id: '2b381-2c6e-4d09-ba',
    image:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww',
    name: 'Jack Little',
    age: 23,
  },
  {
    id: '3b381-2c6e-4d09-ba',
    image:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1vZGVsfGVufDB8fDB8fHww',
    name: 'Barbara Diangles',
    age: 24,
  },
  {
    id: '4b381-2c6e-4d09-ba',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww',
    name: 'Hester Hogan',
    age: 21,
  },
  {
    id: '5b381-2c6e-4d09-ba',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
    name: 'Bertie Yates',
    age: 34,
  },
];

async function main() {
  // Insert seed data into the 'Person' model
  for (const buddy of birthdayBuddy) {
    await db.person.upsert({
      where: { id: buddy.id },
      update: {}, // Update with an empty object means no actual update is performed
      create: {
        id: buddy.id,
        name: buddy.name,
        age: buddy.age,
        img: buddy.image,
      },
    });
  }
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
