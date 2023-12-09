import { nanoid } from 'nanoid';
import Color from './Color';

const ColorList = ({ colors, toast }) => {
  return (
    <section className="container grid  md:grid-cols-4  text-center">
      {colors.map((color, index) => {
        return (
          <Color
            toast={toast}
            key={nanoid()}
            index={index}
            color={color}
          />
        );
      })}
    </section>
  );
};
export default ColorList;
