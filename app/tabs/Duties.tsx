import { v4 as uuidv4 } from 'uuid';
import { MdDoubleArrow } from 'react-icons/md';

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        const id = uuidv4();
        return (
          <div
            key={id}
            className="flex  items-center justify-start p-2 gap-2  relative"
          >
            <MdDoubleArrow className="text-2xl absolute text-green-700 top-2" />
            <p className="ml-6 md:ml-10">{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
