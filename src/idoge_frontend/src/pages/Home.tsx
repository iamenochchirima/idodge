import Main from "../components/Main";


const Home = () => {
  return (
    <div
      className="flex justify-center  bg-contain  bg-center bg-no-repeat items-center bg-purple-900 "
      style={{
        backgroundImage: "url('/Background.jpg')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="xl:max-w-[1500px] w-full ">
        <div className=" text-gray-300 h-full w-full">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Home;
