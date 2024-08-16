import React, { useEffect } from 'react';
import '../main.scss';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';

export const MziziApp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='project-container bg-[#212124]'>
      <div className='project-heading-mziziapp '>
        <div className='ml-8 md:ml-16 lg:ml-32'>
          <h1>Mzizi App</h1>
          <p>TypeScript/ React /Material UI </p>
        </div>
      </div>

      <div className='pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-8'>
        <Fade top>
          <div className='md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3'>
            <h2 className='capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]'>
              Overview
            </h2>
            <p className='text-[#bdc1c6]'>
              Mzizi App is the all in one website for mziziapp.com that I
              developed.
              <br />
              <br />
            </p>

            <div className='btn'>
              <button>
                <a href='https://www.mziziapp.com/' target='self'>
                  demo
                </a>
              </button>
            </div>
          </div>
        </Fade>
        <div className='mb-4'>
          <h3 className='text-[25px] leading-[75px]  text-[#ffbd39] '>
            Technologies
          </h3>
          <ul>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Material UI</li>
          </ul>
        </div>
      </div>
      <div className='max-w-[80%] mx-auto'>
        <button onClick={() => navigate(-1)} className='back-btn'>
          back
        </button>
      </div>
    </div>
  );
};
