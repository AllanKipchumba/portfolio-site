import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";

export const Packages = () => {
  const [hide, setHide] = useState(false);
  return (
    <>
      <h1>April2018 - Jully2018</h1>
      <h2>Fundamentals of Computers</h2>
      <h3>ICS college</h3>

      <button onClick={() => setHide(!hide)}>Read More</button>

      {hide && (
        <Fade bottom>
          <div className="readmore md:left-[-40vw]">
            <h1>fundamentals of computers</h1>
            <h2>ICS College</h2>
            <p>
              I should concede that this was my first practical experience with
              computing. I was just a high school freshman who wanted to be a
              part of the digital revolution. I was eager to learn how to use
              computers, and I did so. The three-month course covered the
              fundamentals of computing, including the Microsoft Office suite,
              networking, and the Internet. I learned the fundamentals of
              designing word documents, data analysis using excel spreadsheets,
              establishing a simple network, and how to use the internet to
              learn and keep up with the latest trends. During this course, I
              began to develop an interest in learning about computer software.
            </p>
            <Link
              activeClass="active"
              to="webDev"
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
