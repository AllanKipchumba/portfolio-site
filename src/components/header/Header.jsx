import React from "react";
import { Navbar } from "../navbar/Navbar";
import "./header.scss";
import Typed from "react-typed";

export const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="text-white pt-[30%]">
        <h1>Hello!</h1>
        <h1 className="text-center uppercase tracking-[6px] font-bold text-lg">
          welcome to my website
        </h1>

        <p className="mt-8 ml-[200px] ">
          {" "}
          I'm {""}
          <Typed
            strings={["Allan kipchumba", "A web designer", "A web developer"]}
            typeSpeed={150}
            backSpeed={100}
            loop
            showCursor={true}
            className="text-xl sm:text-4xl md:text-4xl font-bold uppercase md:pl-4 pl-2 text-[#ffbd39]"
          />
        </p>
      </div>
      <div className="btn mt-20 flex gap-6 ml-[260px]">
        <button>View Work</button>
        <button>Hire Me</button>
      </div>
    </div>
  );
};
