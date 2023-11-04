import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Element", "Percentage"],
  ["Community Airdrop", 50],
  ["Liquidity Provider", 25],
  ["Reserves", 10],
  ["Marketing", 10],
  ["Development & Legal", 5],
];

const options = {
  title: "Tokenomics",
  is3D: true,
  titleTextStyle: {
    color: "#ffffff",
    fontSize: 24,
    bold: true,
  },
  hAxis: { textStyle: { color: "#ffffff" } },
  vAxis: { textStyle: { color: "#ffffff" } },
  legend: { textStyle: { color: "#ffffff" } },
  pieSliceTextStyle: { color: "#ffffff" },
  backgroundColor: "transparent",
};

const Main = () => {
  return (
    <div className="flex flex-col text-white">
      <div className="flex justify-center xl:gap-10 items-center pt-5">
        <img
          src="/text.png"
          alt="Q4 2023"
          className="h-[100px] w-[150px] xl:h-[150px] xl:w-[200px]"
        />
        <img
          src="/idoge.png"
          alt="IDoge"
          className="h-[150px] w-[150px] xl:h-[200px] xl:w-[200px]"
        />
      </div>

      <div className=" px-4 py-8 bg-blue-400 bg-opacity-20 my-5 mx-10 md:mx-[200px] rounded-2xl">
        <h2 className="text-3xl font-bold ">About Internet Doge (iDOGE)</h2>
        <p className="mt-4">
          Internet Doge is a vibrant and fun cryptocurrency that embodies the
          spirit of memes, laughter, and community. Inspired by Billy Markus and
          Jackson Palmer’s Dogecoin, our coin seeks to bring joy and
          entertainment to the Internet Computer Ecosystem.
        </p>
      </div>

      <div className=" px-0 sm:px-4 ss:py-8 py-0 bg-blue-400 bg-opacity-20 my-5 mx-10 md:mx-[200px] rounded-2xl">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
      <div className="mt-5 flex ss:justify-between justify-center items-center ">
        <div className="mx-10  md:ml-[200px] flex flex-col gap-5">
          <div className="bg-blue-400 bg-opacity-20 rounded-2xl px-4 py-8">
            <h3 className="font-bold text-2xl">
              Maximum supply-{" "}
              <span className="font-normal text-xl">1,000,000</span>
            </h3>
          </div>
          <div className="bg-blue-400 bg-opacity-20 rounded-2xl px-4 py-8">
            <h3 className="font-bold text-2xl">Legal</h3>
            <div className="flex flex-col mt-5 text-blue-200">
              <a className="hover:underline" href="https://www.idoge.org/terms">Terms and conditions</a>
              <a  className="hover:underline" href="https://www.idoge.org/privacy">Privacy</a>
            </div>
          </div>
        </div>
        <div className="hidden ss:block">
          <img
            src="/clown.png"
            alt="idoge clown"
            className="w-[300px] h-[300px] md:h-[400px] md:w-[400px] md:mr-[150px] "
          />
        </div>
      </div>
      <div className="flex justify-center ss:hidden">
          <img
            src="/clown.png"
            alt="idoge clown"
            className="h-[300px] w-[300px] "
          />
        </div>
    </div>
  );
};

export default Main;
