import Duties from './Duties';

const JobsInfo = ({ jobs, currentItem }) => {
  if (!jobs || jobs.length === 0) {
    return (
      <div className="loader-wrapper w-full">
        <div className="loader"></div>
      </div>
    );
  }
  const { title, dates, duties, company } = jobs[currentItem];
  return (
    <div className="container flex flex-col gap-2 w-full">
      <div className="title">{title}</div>
      <div className="bg-green-500 text-white font-bold w-fit px-2 rounded-b-xl">
        {company}
      </div>
      <div className="border border-dashed w-fit p-2 rounded-lg border-black/50 shadow-lg">
        {dates}
      </div>
      <Duties duties={duties} />
    </div>
  );
};
export default JobsInfo;
