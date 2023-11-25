export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className=" shadowAnimation back-shadow rounded-xl w-full h-full ">
      {/* title */}
      <h3 className="  rounded-t-lg p-4 text-center">
        <span></span> Friends Birthday (List)
      </h3>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 m-4  shadowAnimation">
        <div className="form-input">
          <label htmlFor="name">Name:</label>
          <input
            className=" w-full"
            type="text"
            id="name"
          />
        </div>
        <div className="form-input">
          <label htmlFor="age">Age:</label>
          <input
            className=" w-full"
            type="number"
            id="age"
          />
        </div>
        <div className="form-input">
          <label htmlFor="image">Image:</label>
          <input
            className="w-full"
            type="file"
            id="image"
          />
        </div>
        <button className=" md:col-span-2 rounded-xl text-sm">
          New Birthday Buddy
        </button>
      </form>

      <div className="flex h-screen gap-4 flex-col p-4  shadowAnimation">
        {/* row */}
        <div className="shadowAnimation relative justify-between flex items-center gap-8 rounded-lg border-y hover:rotate-1 cursor-pointer p-2 pr-10  hover-shadow">
          <img
            className="shadowAnimation"
            style={{ width: 80, height: 80 }}
          />
          <div className="mt-4 w-full">
            <p className="text-lg font-semibold"></p>
            <p>
              <span></span> Years
            </p>
          </div>
          <button className=" z-10 absolute right-0 -top-0.5 "></button>
        </div>
        <div className="shadowAnimation relative justify-between flex items-center gap-8 rounded-lg border-y hover:rotate-1 cursor-pointer p-2 pr-10  hover-shadow">
          <img
            className="shadowAnimation"
            style={{ width: 80, height: 80 }}
          />
          <div className="mt-4 w-full">
            <p className="text-lg font-semibold"></p>
            <p>
              <span></span> Years
            </p>
          </div>
          <button className=" z-10 absolute right-0 -top-0.5 "></button>
        </div>
        <div className="shadowAnimation relative justify-between flex items-center gap-8 rounded-lg border-y hover:rotate-1 cursor-pointer p-2 pr-10  hover-shadow">
          <img
            className="shadowAnimation"
            style={{ width: 80, height: 80 }}
          />
          <div className="mt-4 w-full">
            <p className="text-lg font-semibold"></p>
            <p>
              <span></span> Years
            </p>
          </div>
          <button className=" z-10 absolute right-0 -top-0.5 "></button>
        </div>
      </div>

      <div className="w-full gap-4  flex ">
        <button className="hover:bg-red-300 transition duration-200 w-full rounded-tr-lg">
          Clear List
        </button>
        <button className="rounded-tl-lg hover:bg-red-300 transition duration-200 w-full">
          Reset List
        </button>
      </div>
    </div>
  );
}
