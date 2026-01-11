import React, { useEffect } from 'react';
import '../main.scss';
import '../../../components/common/Fade.css';
import { useNavigate } from 'react-router-dom';

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
          <p>Full-Stack Web Application</p>
        </div>
      </div>

      <div className='pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-8'>
        <div className='fade-top md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3'>
            <h2 className='capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]'>
              Overview
            </h2>
            <p className='text-[#bdc1c6]'>
              Mzizi App is a comprehensive digital platform that serves as the complete web solution for mziziapp.com. The application delivers a seamless user experience through its modern, responsive design and intuitive interface. Built with cutting-edge web technologies, Mzizi App showcases professional development practices and attention to detail in both functionality and user experience design. The platform demonstrates expertise in creating scalable, maintainable web applications that effectively serve their intended purpose while maintaining high standards of performance and usability.
              <br />
              <br />
            </p>

            <div className='btn'>
              <button>
                <a href='https://www.mziziapp.com/' target='_blank' rel='noopener noreferrer'>
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
