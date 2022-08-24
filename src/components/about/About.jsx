import React from "react";
import "./about.scss";
import profile from "./assets/profile.jpg";

export const About = () => {
  return (
    <>
      <div className="about">
        <h1 className="py-14 capitalize text-[38px] font-[700] leading-[57px] text-center">
          about me
        </h1>

        <div className="flex gap-8 ">
          <div>
            <img src={profile} alt="developer" />
          </div>
          <div>
            <h1>
              I am <span>Allan</span>
            </h1>
            <p>Passionate Web Developer</p>

            <p>
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
