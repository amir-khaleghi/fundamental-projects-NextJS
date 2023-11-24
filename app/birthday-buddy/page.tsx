import Card from '@/components/Card';
import List from '@/components/List';
import { birthdayBuddy } from '@/lib/data';

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <List props={birthdayBuddy} />
      <Card props={birthdayBuddy} />
    </div>
  );
};
export default page;
