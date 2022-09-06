import React from "react";
import { useNavigate } from "react-router-dom";
import "../main.scss";
import { Fade } from "react-reveal";

export const Sogy = () => {
  const navigate = useNavigate();
  return (
    <div className="project-container bg-[#212124]">
      <div className="project-heading-sogy">
        <div className="md:ml-16 lg:ml-32">
          <h1>Landing page</h1>
          <p>React</p>
        </div>
      </div>

      <div className="pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-8">
        <Fade top>
          <div className="md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3">
            <h2 className="capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]">
              Overview
            </h2>
            <p className="text-[#bdc1c6]">
              This was my first GitHub react project. It is a straightforward
              landing page on a hotel website that provides prospective
              customers with a tour of the hotel as well as crucial links. This
              project was crucial to me since I wanted to put my recently
              acquired react abilities, at the time, to use. This project was
              entirely built in React.
            </p>

            <div className="btn">
              <button>
                <a href="https://sogy-hotel.netlify.app/#/" target="self">
                  demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/AllanKipchumba/Sogy-Hotel"
                  target="self"
                >
                  code
                </a>
              </button>
            </div>
          </div>
        </Fade>

        <div className="mb-4">
          <h3 className="text-[25px] leading-[75px]  text-[#ffbd39] ">
            Technologies
          </h3>
          <ul>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Material UI</li>
            <li>CSS3</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[80%] mx-auto">
        <button onClick={() => navigate(-1)} className="back-btn">
          back
        </button>
      </div>
    </div>
  );
};
