import React from "react";
import "./projects.scss";
import sogy from "./assets/sogy.JPG";
import simon from "./assets/simon.JPG";
import { StoryHub } from "./portfolio/StoryHub";
import { TaskmanagerApi } from "./portfolio/TaskmanagerApi";

export const Projects = () => {
  return (
    <>
      <div className="projects" id="projects">
        <h1 className="py-10 capitalize text-[50px] font-[700] leading-[75px] text-center">
          projects
        </h1>
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[80%] mx-auto pb-[100px]">
          <div>
            <StoryHub />
          </div>
          <TaskmanagerApi />
          <div></div>
          <div>
            <img src={sogy} alt="landing-page" />
            <h1>Landing Page</h1>
            <p>
              This was my first GitHub react project. It is a straightforward
              landing page on a hotel website that provides prospective
              customers with a tour of the hotel as well as crucial links.
            </p>
            <p>Technologies: React, CSS3</p>
            <div>
              <button>
                <a href="https://sogy-hotel.netlify.app/#/">View Demo</a>
              </button>
              <button>
                <a href="https://github.com/AllanKipchumba/Sogy-Hotel">
                  view code
                </a>
              </button>
            </div>
          </div>
          <div>
            <img src={simon} alt="simon-game" />
            <h1>Simon Game Clone</h1>
            <p>
              Simon is an electronic game of short-term memory skill invented by
              Ralph H. Baer and Howard J. Morrison. The device produces a series
              of tones and lights that the user must repeat. If the user is
              successful, the sequence lengthens and becomes more complicated.
              When the user fails or the time limit expires, the game is ended.
            </p>
            <p>Technologies: Javascript, HTML5, CSS3</p>
            <div>
              <button>
                <a href="https://allankipchumba.github.io/simon_game_clone/">
                  View Demo
                </a>
              </button>
              <button>
                <a href="https://github.com/AllanKipchumba/simon_game_clone">
                  view code
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
