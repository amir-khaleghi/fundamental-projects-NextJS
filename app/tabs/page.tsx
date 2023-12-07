'use client';
import { useEffect, useState } from 'react';
import JobsInfo from './JobsInfo';
import TabContainer from './TabContainer';

const url = 'https://course-api.com/react-tabs-project';

const Page = () => {
  /* States _____________________________________________ */
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  /* Fetch ______________________________________________ */
  const fetchFunc = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log('this is data', data);
      setJobs(data);
    } catch (error) {
      console.log(`this is error : ${error}`);
    }
  };

  /* UseEffect ____________________________________________ */
  useEffect(() => {
    fetchFunc();
  }, []);

  /* Handler ____________________________________________ */

  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <main className="backdrop-blur-lg rounded-xl items-center transparent p-2 md:mx-10  md:p-10 gap-4 flex flex-col bg-gradient-to-b  shadow-2xl from-green-300 via-blue-300 to-pink-100 w-full ">
      <TabContainer
        jobs={jobs}
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
      />
      <JobsInfo
        jobs={jobs}
        currentItem={currentItem}
      />
    </main>
  );
};
export default Page;
