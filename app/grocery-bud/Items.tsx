import SingleItem from './SingleItem';

const Items = ({ items, deleteItem, editItem }) => {
  /* State ______________________________________________ */
  return (
    <section className="flex flex-col  mt-4 gap-2">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            deleteItem={deleteItem}
            editItem={editItem}
            item={item}
          />
        );
      })}
    </section>
  );
};
export default Items;
