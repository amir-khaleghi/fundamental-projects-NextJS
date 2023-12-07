import Image from 'next/image';

/* Motion _______________________________________________ */
import { fadeInImage } from '@/utils/variants';
import { motion } from 'framer-motion';

const MenuItem = ({ id, title, category, price, img, desc }) => {
  return (
    <motion.div
      className="back-shadow rounded-xl "
      variants={fadeInImage}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <Image
        className="w-full h-80 object-cover rounded-t-xl"
        src={img}
        alt="title"
        width="300"
        height="300"
      />
      <div className="m-6">
        <header className="flex items-center justify-between m-2">
          <div className="text-xl font-bold capitalize ">{title}</div>
          <span className="bg-orange-500 p-1 text-white rounded-lg">
            {price}
          </span>
        </header>
        <p className="p-2  leading-8 text-sm md:text-lg font-serif">{desc}</p>
      </div>
    </motion.div>
  );
};
export default MenuItem;
