const TabContainer = ({ jobs, setCurrentItem, currentItem }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {jobs.map((job, index) => {
        return (
          <button
            onClick={() => setCurrentItem(index)}
            key={job.id}
            className={
              index === currentItem
                ? 'bg-blue-500 text-white px-3 py-2 rounded-lg hover-105'
                : 'bg-white text-blue-500 px-3 py-2 rounded-lg hover-105'
            }
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default TabContainer;
