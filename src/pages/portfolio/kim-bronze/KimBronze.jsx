import React, { useEffect } from 'react';
import '../main.scss';
import '../../../components/common/Fade.css';
import { useNavigate } from 'react-router-dom';

export const KimBronze = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='project-container bg-[#212124]'>
      <div className='project-heading-kim-bronze'>
        <div className='ml-8 md:ml-16 lg:ml-32'>
          <h1>Kim Bronze Sculptures</h1>
          <p>African Wildlife Art Gallery</p>
        </div>
      </div>

      <div className='pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-8'>
        <div className='fade-top md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3'>
            <h2 className='capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]'>
              Overview
            </h2>
            <p className='text-[#bdc1c6]'>
              Kim Bronze Sculptures showcases the extraordinary work of Kimani Kiarie, a self-taught African wildlife sculptor dedicated to preserving the beauty and heritage of Africa's wildlife through art. The website presents a carefully curated gallery of bronze sculptures capturing the essence of African wildlife, from majestic elephants to graceful gazelles. Each piece reflects Kimani's mastery of traditional bronze cast techniques, refined during his 14 years working with fossils and artifacts at the National Museums of Kenya. The platform serves as both an artistic showcase and a means for collectors and nature enthusiasts to explore and acquire these handcrafted tributes to Africa's rich natural heritage.
              <br />
              <br />
            </p>

            <div className='btn'>
              <button>
                <a href='https://kimbronze.co.ke/' target='_blank' rel='noopener noreferrer'>
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

