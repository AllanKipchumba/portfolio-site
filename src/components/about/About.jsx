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
                I am a software engineer with over 4 years of experience specializing in
                building scalable backend systems and web applications. I approach systems
                with the precision to understand their deeper patterns and the pragmatism
                to architect solutions that scale. Throughout my career, I've worked with
                innovative organizations including Nafa Financial Services, Kwaju Africa,
                and Adanian Labs, where I've honed my ability to transform complex business
                challenges into elegant technical solutions.
              </p>
              <br />
              <p>
                I see complexity as an opportunity to thoughtfully orchestrate the smallest
                units of a problem space, building systems that not only work today but
                adapt gracefully to tomorrow's demands. Driven by intellectual curiosity
                and the satisfaction of building robust solutions, I believe the best systems
                emerge from teams who challenge assumptions and refine ideas until they reach
                something truly resilient. I collaborate effectively and am always open to
                diverse perspectives, working together to arrive at unified solutions that
                reflect the careful thought that went into understanding them in the first place.
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
