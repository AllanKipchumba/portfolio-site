import React from "react";
import "./about.scss";
import profile from "./assets/profile.jpg";

export const About = () => {
  return (
    <>
      <div className="about">
        <h1 className="py-14 capitalize text-[50px] font-[700] leading-[75px] text-center">
          about me
        </h1>

        <div className="flex gap-8 max-w-[80%] mx-auto">
          <div>
            <img src={profile} alt="developer" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">
              I am <span className="text-[#ffbd39]">Allan</span>
            </h1>
            <p className="uppercase tracking-[5px] mb-20 text-[#999999]">
              Passionate Web Developer
            </p>

            <p className="text-[#999999]">
              I am a 4th Year Electrical and Electronics Engineering Student at
              Moi university. My passion is learning about technology and
              computer software. I enjoy keeping up with the latest technology
              and learning everything I can about how it works. One of my
              biggest strengths is problem solving. I like to confront problems
              front on by devising workable solutions to them.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
