import Main from "./components/Main";

const App = () => {
  return (
    <div className="flex justify-center items-center bg-purple-900">
      <div className="xl:max-w-[1500px] w-full ">
        <div
          className=" text-gray-300 bg-contain  bg-center bg-no-repeat h-full w-full"
          style={{
            backgroundImage: "url('/Background.jpg')",
            backgroundSize: "100% 100%",
          }}
        >
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
