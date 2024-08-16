import React, { useEffect } from 'react';
import '../main.scss';
// import styles from "./styles.module.scss";
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';

export const AgraAi = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='project-container bg-[#212124]'>
      <div className='project-heading-agraai '>
        <div className='ml-8 md:ml-16 lg:ml-32'>
          <h1>Agra AI</h1>
          <p>TypeScript/ Next.js/ Redux</p>
        </div>
      </div>

      <div className='pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-8'>
        <Fade top>
          <div className='md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3'>
            <h2 className='capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]'>
              Overview
            </h2>
            <p className='text-[#bdc1c6]'>
              Agra AI is a PoC developed to showcase RAG AI applications with
              text to speech support. The Backend RAG and the TTS model may be
              unavailable. You can ecplore the UI. The UI was developed solely
              for desktop.
              <br />
            </p>

            <div className='btn'>
              <button>
                <a href='https://agra-ai.vercel.app/' target='self'>
                  Demo
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
            <li>Redux.js</li>
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
