import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => {
        return (
          <MenuItem
            key={item.id}
            {...item}
          />
        );
      })}
    </div>
  );
};
export default Menu;
