import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";

export const WebDevBootcamp = () => {
  const [hide, setHide] = useState(false);
  return (
    <>
      <h1>March2021 - Jully2021</h1>
      <h2>Web Development Bootcamp</h2>
      <h3>App Brewery - Dr Angela Yu</h3>
      <button onClick={() => setHide(!hide)}>Read More</button>

      {hide && (
        <Fade left>
          <div className="readmore">
            <h1>web development bootcamp</h1>
            <h2>App Brewery</h2>
            <p>
              My desire to learn web technologies led me to Dr. Angela Yu's
              5-month Coding Boot camp at App Brewery. I am proud of the boot
              camp because it taught me the fundamentals of web development from
              start to finish; the design phase, color theory, HTML5, CSS3,
              JavaScript, Git and GitHub, command line interface, Node.js,
              Express, MongoDB, and React.js were all taught in a project-based
              approach. This increased my stamina for web design and
              development. <br />
              <br />
              Debugging techniques, which manifest to be a valuable asset to any
              developer, were thoroughly covered here. Professional developer
              best practices were thoroughly taught because software development
              ethics and professionalism are just as important as the software
              itself. <br />
              <br />
              The boot camp also challenged us to constantly learn new skills in
              order to maintain our value in the industry because software
              rapidly evolves and the only way to maintain our relevance and
              keep up our skills is to keep learning. This has greatly motivated
              me to consistently learn new skills whenever the opportunity
              arises.
            </p>
            <Link
              activeClass="active"
              to="node"
              spy={true}
              smooth={true}
              offset={-65}
              duration={1000}
            >
              <button onClick={() => setHide(!hide)}> close </button>
            </Link>
          </div>
        </Fade>
      )}
    </>
  );
};
