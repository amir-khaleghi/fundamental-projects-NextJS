import Loading from '@/app/loading';
import Tour from './Tour';
import { url } from '@/constants/index';
import { useEffect, useState } from 'react';
const Tours = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTour] = useState([]);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      // console.log(tours);
      setTour(tours);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  /* Handler ____________________________________________ */
  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTour(newTour);
  };

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="flex flex-col gap-3">
        <div>There is no more Tour</div>
        <button
          onClick={fetchData}
          className="btn-primary rounded-lg "
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="gird  w-fit  h-full gap-8  grid lg:grid-cols-3 md:grid-cols-2">
      {tours.map((tour) => {
        return (
          <Tour
            key={tour.id}
            {...tour}
            removeTour={removeTour}
          />
        );
      })}
    </div>
  );
};
export default Tours;
