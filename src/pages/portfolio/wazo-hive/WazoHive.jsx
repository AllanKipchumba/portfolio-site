import React, { useEffect } from 'react';
import '../main.scss';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';

export const WazoHive = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='project-container bg-[#212124]'>
      <div className='project-heading-wazo-hive'>
        <div className='ml-8 md:ml-16 lg:ml-32'>
          <h1>Wazo Hive</h1>
          <p>Tech Community & Innovation Platform</p>
        </div>
      </div>

      <div className='pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-8'>
        <Fade top>
          <div className='md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3'>
            <h2 className='capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]'>
              Overview
            </h2>
            <p className='text-[#bdc1c6]'>
              Wazo Hive is a comprehensive platform designed to unify young tech mavericks and innovators across higher learning institutions in Africa. The platform bridges the gap between brilliant tech students, recruiters, investors, alumni, and tech enthusiasts through curated communities, mentorship programs, idea labs, and hackathons. Wazo Hive addresses the critical challenge of tech students building in isolation by providing them with visibility, community support, and opportunities to connect with industry challenges. The platform serves as a vibrant ecosystem where innovation thrives, facilitating talent placement, idea investment, technical co-founder matching, and community-building events that drive Africa's tech revolution forward.
              <br />
              <br />
            </p>

            <div className='btn'>
              <button>
                <a href='https://wazo-hive.vercel.app/' target='_blank' rel='noopener noreferrer'>
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

