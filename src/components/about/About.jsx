import React, { useState } from "react";
import "./about.scss";
import profile from "./assets/profile.jpg";
import { Fade } from "react-reveal";

export const About = () => {
  const [readMore, setReadMore] = useState("false");
  return (
    <>
      <div className="about" id="about">
        <h1 className="foo py-14 capitalize text-[50px] font-[700] leading-[75px] text-center">
          about me
        </h1>

        <div className="relative  max-w-[80%] mx-auto pb-[100px]">
          <div className="gap-4 md:gap-10 lg:gap-0 grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center">
              <img
                src={profile}
                alt="developer"
                className="w-[50%] md:w-[100%] lg:w-[50%] "
              />
            </div>
            <div className="lg:mt-[40px]">
              <h1 className="text-3xl font-bold mb-2">
                I am <span className="text-[#ffbd39]">Allan</span>
              </h1>
              <p className="uppercase tracking-[5px] mb-5">
                A Passionate Web Developer
              </p>

              <p>
                I am very interested in technology and computer software. I have
                a consistent source of motivation that drives me to stay current
                with technology and learn everything I can about how it works.
                This passion has driven me to push myself to consistently learn
                new skills, making me a better developer by the day.
              </p>
              <button onClick={() => setReadMore(true)}>Read More</button>
            </div>
          </div>

          {readMore && (
            <Fade bottom>
              <div className="readmore">
                <p>
                  I am driven and ambitious. I thrive on challenges and
                  constantly set goals for myself so that I have something to
                  strive for. I am not comfortable with settling, and I am
                  always looking for an opportunity to do better and achieve
                  greatness. I am highly organized. I always take notes, and I
                  use a series of tools to help myself stay on top of deadlines.
                  I like to keep a clean workspace and create a logical filing
                  method so I am always able to find what I need. I enjoy
                  interacting with others. I enjoy meeting new people and
                  finding out about their lives and backgrounds. I almost always
                  find common ground with strangers, and I enjoy making people
                  feel at ease in my company. I find this skill is especially
                  helpful when kicking off projects with new clients. I am a
                  results-oriented person who is constantly checking in with the
                  goal to see where I am and what it will take to get there. I
                  am a fantastic communicator. I take pride in ensuring that
                  people have the right information because it leads to better
                  results. I value teamwork because I believe that in order to
                  create a great product, you should be able to bring together
                  brilliant ideas or perhaps, a group of talented individuals to
                  increase efficiency and productivity. One of my strongest
                  skills is problem solving. I believe in confronting problems
                  head on and devising workable solutions to them.
                </p>
                <button onClick={() => setReadMore(false)}>Close</button>
              </div>
            </Fade>
          )}
        </div>
      </div>
    </>
  );
};
