import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';

export const Degree = () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <h1>2018 - 2023 </h1>
      <h2>Bachelor of Engineering</h2>
      <h3>moi university</h3>
      <button onClick={() => setHide(!hide)}>Read More</button>

      {hide && (
        <Fade left>
          <div className='readmore'>
            <h1>BE in Electrical and Electronics Engineering,</h1>
            <h2>Moi University.</h2>
            <p>
              Studying Electrical and Electronics Engineering at Moi University
              provided me with more than just technical knowledge—it shaped my
              ability to approach and solve complex problems. Throughout the
              program, I immersed myself in a diverse range of subjects, from
              Mathematics and telecommunications to electronics and computer
              engineering. However, the most significant impact came from the
              software engineering courses I completed, including Introduction
              to Computer Programming, Operating Systems, Web Design and
              Implementation, Object-Oriented Programming, Data Structures and
              Algorithms, Database Design and Management, and Fuzzy Logic and
              Neural Networks.
            </p>
            <p>
              These courses gave me a firm grasp of problem-solving and equipped
              me with a solid foundation in tackling technical challenges. The
              program fostered critical thinking, creativity, and discipline,
              challenging me to think beyond the obvious and consider all
              possibilities. My engineering education has been invaluable in
              shaping my approach to both technical and business problems, and I
              carry these lessons with me into every project I undertake.
            </p>
            <Link
              activeClass='active'
              to='education'
              spy={true}
              smooth={true}
              offset={-65}
              duration={1000}
            >
              <button
                onClick={() => setHide(!hide)}
                className='md:!mb-[35px] lg:!mb-[100px]'
              >
                close
              </button>
            </Link>
          </div>
        </Fade>
      )}
    </>
  );
};
