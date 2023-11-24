const layout = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 md:w-full">
      <div>{children}</div>
    </div>
  );
};
export default layout;
