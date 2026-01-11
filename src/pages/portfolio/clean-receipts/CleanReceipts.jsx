import React, { useEffect } from 'react';
import '../main.scss';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';

export const CleanReceipts = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='project-container bg-[#212124]'>
      <div className='project-heading-clean-receipts'>
        <div className='ml-8 md:ml-16 lg:ml-32'>
          <h1>Clean Receipts</h1>
          <p>AI-Powered Receipt Management Platform</p>
        </div>
      </div>

      <div className='pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-8'>
        <Fade top>
          <div className='md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3'>
            <h2 className='capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]'>
              Overview
            </h2>
            <p className='text-[#bdc1c6]'>
              Clean Receipts is an innovative AI-powered receipt management platform designed to streamline expense tracking and financial record-keeping. The platform leverages advanced artificial intelligence to automatically extract, categorize, and organize receipt data, eliminating the need for manual data entry. Built with modern web technologies, Clean Receipts provides businesses and individuals with a seamless solution for managing receipts, tracking expenses, and generating comprehensive financial reports. The platform's intelligent processing capabilities ensure accuracy and efficiency, making financial management more accessible and less time-consuming.
              <br />
              <br />
            </p>

            <div className='btn'>
              <button>
                <a href='https://keeva-ai-clean-receipts.vercel.app/' target='_blank' rel='noopener noreferrer'>
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

