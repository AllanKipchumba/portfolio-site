import React from "react";
// import "../main.scss";
import "./styles.scss";

export const StoryHub = () => {
  return (
    <div className="project-container bg-[#212124]">
      <div className="project-heading">
        <div className="md:ml-16 lg:ml-32">
          <h1>StoryHub</h1>
          <p>React/ Node/ MongoDB</p>
        </div>
      </div>

      <div className="pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-8">
        <div className="md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3">
          <h2 className="capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]">
            Overview
          </h2>
          <p className="text-[#bdc1c6]">
            StoryHub is a website that allows people to publish and access
            previously published information. This project has been really
            beneficial in that it has allowed me to blend my front-end and back-
            end skills. React, Express, and MongoDB were used to create this
            project. JWT tokens were utilized for authentication, Data
            persistence was used to save data locally in the browser, and the
            Redux framework was used to manage state.
          </p>

          <div className="btn">
            <button>demo</button>
            <button>code</button>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-[25px] leading-[75px]  text-[#ffbd39] ">
            Technologies
          </h3>
          <ul>
            <li>React</li>
            <li>redux</li>
            <li>Node</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[80%] mx-auto">
        <button className="back-btn">Back</button>
      </div>
    </div>
  );
};
