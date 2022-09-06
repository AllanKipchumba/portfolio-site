import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";

export const Degree = () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <h1>2018 - present</h1>
      <h2>Bachelor of Engineering</h2>
      <h3>moi university</h3>
      <button onClick={() => setHide(!hide)}>Read More</button>

      {hide && (
        <Fade left>
          <div className="readmore">
            <h1>Bachelors of Engineering,</h1>
            <h2>Moi University.</h2>
            <p>
              I am an Electrical and Electronics Engineering student at Moi
              University. Problem solving is central to the Engineering
              curriculum. The curriculum fundamentally covers a wide range of
              subjects, including mechanics, telecommunications, electronics,
              power, computer engineering, advanced mathematics, and applied
              physics. This instills a great deal of creativity, critical
              thinking, logical thinking, objectivity, and discipline. <br />{" "}
              <br />
              Furthermore, the curriculum teaches you to think outside the box,
              pay attention to details, and develop a broad range of technical
              thinking skills. When approaching a problem, you are constantly
              challenged to stretch your thinking and consider all
              possibilities. <br />
              <br /> It is an intriguing STEM field that I would recommend to
              anyone that is immensely interested in Science, Technology,
              Engineering and Mathematics. Every experience I've had in
              Engineering school is immensely valuable to me.
            </p>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-65}
              duration={1000}
            >
              <button
                onClick={() => setHide(!hide)}
                className="md:!mb-[35px] lg:!mb-[100px]"
              >
                {" "}
                close{" "}
              </button>
            </Link>
          </div>
        </Fade>
      )}
    </>
  );
};
