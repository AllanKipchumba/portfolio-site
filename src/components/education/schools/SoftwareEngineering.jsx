import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';

export const SoftwareEngineering = () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <h1>March2021 - Sept 2021</h1>
      <h2>Sofware Engineering </h2>
      <h3>The App Brewery</h3>
      <button onClick={() => setHide(!hide)}>Read More</button>

      {hide && (
        <Fade left>
          <div className='readmore md:left-[-40vw]'>
            <h1>The App Brewery</h1>
            <h2>London</h2>
            <p>
              I enrolled in an intensive 6-month software engineering remote
              program at The App Brewery in London, led by Dr. Angela Yu. This
              program introduced me to the fundamentals of software engineering,
              with a focus on building web applications and secure databases.
              Through this experience, I learned the importance of continuous
              learning to stay relevant in a rapidly evolving industry—a lesson
              that has stayed with me ever since. I am always on the lookout for
              new opportunities to learn and grow.
            </p>
            <Link
              activeClass='active'
              to='degree'
              spy={true}
              smooth={true}
              offset={-65}
              duration={1000}
            >
              <button onClick={() => setHide(!hide)} className='lg:!mb-[50px]'>
                close
              </button>
            </Link>
          </div>
        </Fade>
      )}
    </>
  );
};
