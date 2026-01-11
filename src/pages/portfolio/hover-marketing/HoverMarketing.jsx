import React, { useEffect } from 'react';
import '../main.scss';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';

export const HoverMarketing = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='project-container bg-[#212124]'>
      <div className='project-heading-hover-marketing'>
        <div className='ml-8 md:ml-16 lg:ml-32'>
          <h1>Hover Marketing Agency</h1>
          <p>Creative Marketing & Consulting Agency</p>
        </div>
      </div>

      <div className='pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-8'>
        <Fade top>
          <div className='md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3'>
            <h2 className='capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]'>
              Overview
            </h2>
            <p className='text-[#bdc1c6]'>
              Hover Marketing is a creative studio and consulting agency that specializes in elevating bold brands, curating memorable experiences, and developing ideas that refuse to be ordinary. As a 360 Marketing Agency, Hover operates at the convergence of marketing, technology, and consulting to drive impact and sustainable growth. The agency serves as a bridge that creates value for brands, rights holders, and media platforms through contemporary partnerships across the marketing ecosystem. Using data and technology, Hover helps brands deliver their message through strategic campaigns that span digital platforms, traditional media, and experiential marketing initiatives.
              <br />
              <br />
            </p>

            <div className='btn'>
              <button>
                <a href='https://hover-marketing-agency.vercel.app/' target='_blank' rel='noopener noreferrer'>
                  View Live Site
                </a>
              </button>
            </div>
          </div>
        </Fade>
      </div>
      <div className='max-w-[80%] mx-auto'>
        <button onClick={() => navigate(-1)} className='back-btn'>
          back
        </button>
      </div>
    </div>
  );
};

