import Card from '@/components/Card';
import List from '@/components/List';

const Page = () => {
  return (
    <div className="flex flex-col gap-20 md:ml-12 lg:ml-28">
      <List />
      <Card />
    </div>
  );
};
export default Page;
