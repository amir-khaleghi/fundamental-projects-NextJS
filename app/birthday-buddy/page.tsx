'use client';
import Card from '@/components/Card';
import List from '@/components/List';

const Page = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <List />
      <Card />
    </div>
  );
};
export default Page;
