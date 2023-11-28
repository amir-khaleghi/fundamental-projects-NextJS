const TitleTag = ({ persons, text }) => {
  return (
    <p className="animation duration-1000 transition transform gap-4 items-center text-lg md:absolute md:-rotate-90 -left-[180px]  md:-left-[200px] top-[112px]  font-semibold  p-4 text-center  shadow-lg shadow-black/50 border-t bg-white hover-105 cursor-pointer md:-z-10 rounded-t-xl flex ">
      <span className="text-back-green">#0{persons.length} </span> {text}
    </p>
  );
};
export default TitleTag;
