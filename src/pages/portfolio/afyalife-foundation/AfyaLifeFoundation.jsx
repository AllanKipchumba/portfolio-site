import React, { useEffect } from 'react';
import '../main.scss';
import '../../../components/common/Fade.css';
import { useNavigate } from 'react-router-dom';

export const AfyaLifeFoundation = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='project-container bg-[#212124]'>
      <div className='project-heading-afyalife-foundation'>
        <div className='ml-8 md:ml-16 lg:ml-32'>
          <h1>AfyaLife Foundation</h1>
          <p>Healthcare & Wellness Foundation</p>
        </div>
      </div>

      <div className='pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-8'>
        <div className='fade-top md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3'>
            <h2 className='capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]'>
              Overview
            </h2>
            <p className='text-[#bdc1c6]'>
              AfyaLife Foundation is a healthcare and wellness organization dedicated to improving health outcomes and promoting wellness initiatives. The foundation's digital presence provides comprehensive information about their programs, initiatives, and impact in the healthcare sector. Through a modern and accessible web platform, AfyaLife Foundation connects with communities, donors, and stakeholders to advance their mission of creating healthier communities and improving access to quality healthcare services.
              <br />
              <br />
            </p>

            <div className='btn'>
              <button>
                <a href='https://www.afyalifefoundation.co.uk/' target='_blank' rel='noopener noreferrer'>
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

