const Category = ({ categories, handleFilter }) => {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {categories.map((category) => {
        return (
          <button
            onClick={() => handleFilter(category)}
            className=" p-2 w-24 bg-green-300 text-black rounded-lg hover-105 hover:bg-green-600 hover:text-white font-semibold capitalize"
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Category;
