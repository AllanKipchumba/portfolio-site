import React from "react";
import "./projects.scss";

export function Projects() {
  return (
    <>
      <div className="projects">
        <h1 className="py-10 capitalize text-[50px] font-[700] leading-[75px] text-center">
          projects
        </h1>
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[80%] mx-auto pb-[100px]">
          <div>
            <h1>StoryHub</h1>
            <p>
              StoryHub is a website that allows people to publish and access
              previously published information. This project has been really
              beneficial in that it has allowed me to blend my front-end and
              back- end skills. React, Express, and MongoDB were used to create
              this project. JWT tokens were utilized for authentication, Data
              persistence was used to save data locally in the browser, and the
              Redux framework was used to manage state.
            </p>
            <div>
              <button>View Demo</button>
              <button>view code</button>
            </div>
          </div>
          <div>
            <h1>React-tailwind app</h1>
            <p>
              A simple website I made to practice my tailwind CSS skills, which
              I had recently acquired at the time.
            </p>
            <div>
              <button>View Demo</button>
              <button>view code</button>
            </div>
          </div>
          <div>
            <h1>Task Manager API</h1>
            <p>
              A rest API that authenticated users can use to create and track
              tasks. It is a simple API that allows users to add, change, and
              delete jobs. It makes use of jwt tokens for authentication.
              Express and MongoDB were used to develop this project. For API
              testing, I relied heavily on Postman.
            </p>
            <div>
              <button>View Demo</button>
              <button>view code</button>
            </div>
          </div>
          <div>
            <h1>Landing Page</h1>
            <p>
              This was my first GitHub react project. It is a straightforward
              landing page on a hotel website that provides prospective
              customers with a tour of the hotel as well as crucial links. This
              project was crucial to me since I wanted to put my recently
              acquired react abilities to use. This project was entirely built
              in react js.
            </p>
            <div>
              <button>View Demo</button>
              <button>view code</button>
            </div>
          </div>
          <div>
            <h1>Simon Game Clone</h1>
            <p>
              Simon is an electronic game of short-term memory skill invented by
              Ralph H. Baer and Howard J. Morrison. The device produces a series
              of tones and lights that the user must repeat. If the user is
              successful, the sequence lengthens and becomes more complicated.
              When the user fails or the time limit expires, the game is ended.
              Using vanilla JavaScript, I attempted and succeeded in creating
              this functionality. I learnt how to manipulate the DOM and use
              JavaScript methods, which helped me improve my JavaScript
              understanding.
            </p>
            <div>
              <button>View Demo</button>
              <button>view code</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
