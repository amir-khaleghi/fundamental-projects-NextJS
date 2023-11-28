// pages/[userId].js

import db from '@/utils/db';

export async function getServerSideProps({ params }) {
  const userId = parseInt(params.userId);
  const user = await db.person.findUnique({
    where: { id: userId },
  });

  return {
    props: { user },
  };
}

export default function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <img
        src={user.imageUrl}
        alt={user.name}
        width={300}
        height={200}
      />
    </div>
  );
}
