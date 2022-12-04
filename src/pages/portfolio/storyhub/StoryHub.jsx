import React from "react";
import "../main.scss";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";

export const StoryHub = () => {
  const navigate = useNavigate();
  return (
    <div className="project-container bg-[#212124]">
      <div className="project-heading-storyhub">
        <div className="md:ml-16 lg:ml-32">
          <h1>StoryHub</h1>
          <p>React/ Node/ MongoDB</p>
        </div>
      </div>

      <div className="pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-8">
        <Fade top>
          <div className="md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3">
            <h2 className="capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]">
              Overview
            </h2>
            <p className="text-[#bdc1c6]">
              StoryHub is a simple website where people can publish and access
              previously published content. To access the information, you must
              first log into the system. Users who do not have an account can
              sign up and log in with their email address and password. Once
              authenticated, the user can read posts made by other users and
              publish their own. The user can narrow down the posts they want to
              read by category. They could also filter the posts so that they
              can see all of the posts by a particular author in a single
              display. <br /> <br />
              This project gave me the opportunity to hone both my front end and
              backend skills. React, Redux, React persistence, Tailwind, and
              Sass are the frontend technologies used in the project. The front
              end is currently in active development on Vercel and Netlify. The
              project's backend technologies include Node, Express, Mongoose,
              JWT tokens, and MongoDB Atlas for cloud data storage. <br />
              <br /> The backend is fully active on Render servers. I relied
              heavily on Postman for API testing throughout the project.
            </p>

            <div className="btn">
              <button>
                <a href="https://storyhub-ui.vercel.app/" target="self">
                  demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/AllanKipchumba/blog_UI"
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
            <li>redux</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
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
