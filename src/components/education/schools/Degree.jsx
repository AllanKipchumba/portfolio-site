import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";

export const Degree = () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <h1>September2018 - present</h1>
      <h2>Bachelor of Engineering</h2>
      <h3>moi university</h3>
      <button onClick={() => setHide(!hide)}>Read More</button>

      {hide && (
        <Fade left>
          <div className="readmore">
            <h1>Bachelors of Engineering,</h1>
            <h2>Moi University.</h2>
            <p>
              I am a student of Electrical and Electronics Engineering at Moi
              University. The curriculum focuses on problem-solving and covers a
              wide range of subjects, including mechanics, telecommunications,
              electronics, power, computer engineering, advanced mathematics,
              and applied physics. This education instills critical and logical
              thinking, objectivity, creativity, and discipline. Additionally,
              the curriculum encourages out-of-the-box thinking, attention to
              detail, and the development of a broad range of technical skills.
              Studying Engineering challenges me to think beyond the obvious and
              consider all possibilities when approaching a problem. I highly
              recommend this exciting STEM field to anyone interested in
              Science, Technology, Engineering, and Mathematics. My experiences
              in Engineering school have been incredibly valuable.
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
