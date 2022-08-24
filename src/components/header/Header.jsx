import React from "react";
import { Navbar } from "../navbar/Navbar";
import "./header.scss";
import Typed from "react-typed";
import { FiChevronDown } from "react-icons/fi";

export const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="text-white pt-[38vh]">
        <h1 className="text-center mb-4 uppercase font-bold">Hello!</h1>
        <h1 className="text-center uppercase tracking-[6px] font-bold text-lg">
          welcome to my website
        </h1>

        <p className="mt-8 text-center">
          {" "}
          <Typed
            strings={[
              "I'm allan kipchumba",
              "an enthusiastic web developer",
              "i enjoy writing code",
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
            showCursor={true}
            className="text-xl sm:text-4xl md:text-4xl font-bold uppercase text-[#ffbd39]"
          />
        </p>
      </div>
      <div className="btn mt-20 flex gap-6">
        <button>View Work</button>
        <button>Hire Me</button>
      </div>

      <div className="scroll-icon">
        <FiChevronDown size={40} className="icon" />
      </div>
    </div>
  );
};
