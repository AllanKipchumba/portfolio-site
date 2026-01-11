import React from 'react';
import styles from './about.module.scss';
import { Link } from 'react-scroll';
import { useState } from 'react';

export const About = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div className={styles.about} id='about'>
        <h1 className='foo py-14 capitalize text-[50px] font-[700] leading-[75px] text-center'>
          About Me
        </h1>

        <div className='relative  max-w-[80%] mx-auto pb-[100px]'>
          <div className='gap-4 md:gap-10 lg:gap-0 grid grid-cols-1 md:grid-cols-2'>
            <div className={`flex justify-center items-center ${styles['image-container']}`}>
              {loading && <div className={styles.shimmer}></div>}
              <img
                src='https://firebasestorage.googleapis.com/v0/b/storyhub-ced7b.appspot.com/o/images_prod%2FProfessional%20profile%20image.png?alt=media&token=ad17557a-2c5b-4013-9589-8f2c749b87e3'
                alt='Allan Kipchumba - Senior Software Engineer'
                className={`${styles.image} ${loading ? styles.loading : ''}`}
                onLoad={() => setLoading(false)}
                loading='lazy'
              />
            </div>
            <div className='lg:mt-[40px]'>
              <h1 className='text-3xl font-bold mb-2'>
                I am <span className='text-[#ffbd39]'>Allan Kipchumba,</span>
              </h1>
              <p className='uppercase tracking-[5px] mb-5'>
                A Software Engineer
              </p>

              <p>
                I am a software engineer with over 6 years of experience specializing in
                building scalable web applications using JavaScript and TypeScript. 
                Throughout my career, I've had the privilege of working with innovative
                organizations including Adanian Labs, Mzizi, and Kwaju Africa, where I've
                refined my expertise in developing robust solutions that address complex
                business challenges. My approach combines strong technical fundamentals
                with innovative problem-solving, ensuring that each project delivers
                measurable value while meeting unique client requirements.
              </p>
              <br />
              <p>
                I thrive in collaborative environments and am passionate about creating
                high-quality, secure, and performant applications. With a proven track
                record of delivering successful projects from conception to deployment,
                I'm committed to helping organizations achieve their digital transformation
                goals. I'm always excited to discuss how we can work together to build
                or enhance your next web application.
              </p>
              <Link
                activeClass='active'
                to='footer'
                spy={true}
                smooth={true}
                offset={-65}
                duration={1000}
              >
                <button>Let's Connect</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
