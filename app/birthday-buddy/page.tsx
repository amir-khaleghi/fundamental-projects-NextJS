import Card from '@/components/Card';
import List from '@/components/List';
import db from '@/utils/db';
//get data
// ──────────────────────────────────────────────────── 🟩 ─
const getData = async () => {
  // await new Promise((resolve, reject) => setTimeout(() => reject(), 2000));
  const data = await db.person.findMany({});
  // console.log(`Hello you are on prisma:${data}`);
  return data;
};

const Page = async () => {
  const persons = await getData();

  return (
    <div className="flex flex-col md:ml-[80px] gap-20  ">
      {/* <List /> */}
      <Card persons={persons} />
    </div>
  );
};
export default Page;
