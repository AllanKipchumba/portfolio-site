import React from "react";
import { useNavigate } from "react-router-dom";
import "../main.scss";
import { Fade } from "react-reveal";

export const SimonGame = () => {
  const navigate = useNavigate();
  return (
    <div className="project-container bg-[#212124]">
      <div className="project-heading-simonGame">
        <div className="md:ml-16 lg:ml-32">
          <h1>Simon-game-clone</h1>
          <p>Javascript</p>
        </div>
      </div>

      <div className="pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-8">
        <Fade top>
          <div className="md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3">
            <h2 className="capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]">
              Overview
            </h2>
            <p className="text-[#bdc1c6]">
              Simon is an electronic game of short-term memory skill invented by
              Ralph H. Baer and Howard J. Morrison. The device produces a series
              of tones and lights that the user must repeat. If the user is
              successful, the sequence lengthens and becomes more complicated.
              When the user fails or the time limit expires, the game is ended.
              <br />
              <br />
              Using vanilla JavaScript, I attempted and succeeded in creating
              this functionality. I learnt how to manipulate the DOM and use
              JavaScript methods, which helped me improve my JavaScript
              understanding.
            </p>

            <div className="btn">
              <button>
                <a
                  href="https://allankipchumba.github.io/simon_game_clone/"
                  target="self"
                >
                  demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/AllanKipchumba/simon_game_clone"
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
            <li>Javascript</li>
            <li>HTML5</li>
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
