import React, { useEffect } from 'react';
import '../main.scss';
import '../../../components/common/Fade.css';
import { useNavigate } from 'react-router-dom';

export const DestinyAdvertising = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='project-container bg-[#212124]'>
      <div className='project-heading-destiny-advertising'>
        <div className='ml-8 md:ml-16 lg:ml-32'>
          <h1>Destiny Advertising</h1>
          <p>Full-Service Advertising Agency</p>
        </div>
      </div>

      <div className='pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-8'>
        <div className='fade-top md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3'>
            <h2 className='capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]'>
              Overview
            </h2>
            <p className='text-[#bdc1c6]'>
              Destiny Advertising is a boutique advertising agency dedicated to delivering bold brand experiences across Africa. The agency's philosophy centers on the belief that businesses thrive when people relate, and their work reflects this commitment to creating meaningful connections. With a focus on solving problems through insight and creativity, Destiny Advertising offers comprehensive services including TV and radio advertising, digital marketing, out-of-home campaigns, branding, and strategic consultancy. The agency has successfully partnered with leading brands across various industries, helping them reach their target audiences effectively while ensuring optimal return on investment through data-driven strategies and creative execution.
              <br />
              <br />
            </p>

            <div className='btn'>
              <button>
                <a href='https://www.destinyadvertising.org/' target='_blank' rel='noopener noreferrer'>
                  View Live Site
                </a>
              </button>
            </div>
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

