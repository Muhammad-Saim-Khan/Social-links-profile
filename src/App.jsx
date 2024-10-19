import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Img from "./assets/onw.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-[100vh] flex justify-center items-center">
        <div className="bg-[#1F1F1F] md:w-[25%]  p-7 rounded-xl">
          <img width={80} className="rounded-full m-auto" src={Img} alt="" />
          <h1 className="text-white text-center text-[20px] font-bold font-serif mt-6 ">
            Muhammad Saim Khan
          </h1>
          <h3 className="text-[#A0B75C] font-bold text-center mt-1 font-sans">
            Karachi, Pakistan
          </h3>
          <p className="text-[#A7A7A7] text-center mt-5 font-medium font-sans">
            "Front-end Developer"
          </p>
          <a target="_blank" href="https://github.com/Muhammad-Saim-Khan">
            <div className="bg-[#333333] mt-5  hover:bg-[#C4F82A] hover:text-black text-center text-white p-[8px] rounded-md font-bold font-sans">
              GitHub
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.frontendmentor.io/profile/Muhammad-Saim-Khan"
          >
            <div className="bg-[#333333] mt-4 hover:bg-[#C4F82A] hover:text-black text-center text-white p-[8px] rounded-md font-bold font-sans">
              Frontend Mentor
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61554894977389"
          >
            <div className="bg-[#333333] mt-4 hover:bg-[#C4F82A] hover:text-black text-center text-white p-[8px] rounded-md font-bold font-sans">
              Facebook
            </div>
          </a>{" "}
          <a
            target="_blank"
            href="https://www.instagram.com/saimkhan_developer/"
          >
            <div className="bg-[#333333] mt-4 hover:bg-[#C4F82A] hover:text-black text-center text-white p-[8px] rounded-md font-bold font-sans">
              Instagram
            </div>
          </a>{" "}
          <a target="_blank" href="https://saim-khan-portfolio.vercel.app/">
            <div className="bg-[#333333] mt-4 hover:bg-[#C4F82A] hover:text-black text-center text-white p-[8px] rounded-md font-bold font-sans">
              Portfolio
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
