import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';

export const ExperienceItem = ({ 
  dates, 
  title, 
  company, 
  location, 
  summary, 
  details,
  id 
}) => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <div>
        <h1>{dates}</h1>
        <h2>{title}</h2>
        <h3>{company}</h3>
        {/* {location && <h4>{location}</h4>} */}
        {summary && <p>{summary}</p>}
        <button onClick={() => setHide(!hide)}>Read More</button>

        {hide && (
          <Fade left>
            <div className='readmore md:left-[-40vw]'>
              <h1>{company}</h1>
              {/* <h2>{location || 'Remote'}</h2> */}
              {details && (
                <ul>
                  {details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              )}
              <Link
                activeClass='active'
                to={id || 'experience'}
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
      </div>
    </>
  );
};

