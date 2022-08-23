import React from "react";
import { Navbar } from "../navbar/Navbar";
import "./header.scss";
import Typed from "react-typed";

export const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="text-white pt-[30%] pl-[30%]">
        <h1>welcome to my website</h1>

        <p>
          {" "}
          I'm {""}
          <Typed
            strings={["Allan", "A web developer", "react"]}
            typeSpeed={150}
            backSpeed={100}
            loop
            showCursor={true}
            className="text-xl sm:text-4xl md:text-5xl text-[#00df9a] font-bold uppercase md:pl-4 pl-2"
          />
        </p>
      </div>
    </div>
  );
};
