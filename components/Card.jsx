const Card = () => {
  return (
    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink shadow-lg bg-white dark:bg-violet-900 my-8 ">
      <div className="flex-1  rounded-t rounded-b-none overflow-hidden">
        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
          <p className="w-full  text-xs md:text-sm px-6 mt-6">
            GETTING STARTED
          </p>
          <div className="w-full font-bold text-xl  px-6">
            Lorem ipsum dolor sit amet.
          </div>
          <p className=" text-base px-6 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
        </a>
      </div>
      <div className="flex-none mt-auto  rounded-b rounded-t-none overflow-hidden  p-6">
        <div className="flex items-center justify-start">
          <button className="bg-white dark:bg-violet-700 mx-auto w-full block lg:mx-0 hover:underline  font-extrabold rounded my-6 py-4 px-8 shadow-md ">
            Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
