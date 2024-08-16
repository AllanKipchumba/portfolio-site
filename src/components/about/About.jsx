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
          about me
        </h1>

        <div className='relative  max-w-[80%] mx-auto pb-[100px]'>
          <div className='gap-4 md:gap-10 lg:gap-0 grid grid-cols-1 md:grid-cols-2'>
            <div className={`flex justify-center ${styles['image-container']}`}>
              {loading && <div className={styles.shimmer}></div>}
              <img
                src='https://firebasestorage.googleapis.com/v0/b/storyhub-ced7b.appspot.com/o/images_prod%2Fprofile_image.webp?alt=media&token=f279dad4-8a7e-43c2-b946-bc5b6bc9a967'
                alt='developer'
                className={`w-[50%] md:hidden lg:block lg:w-[60%] ${
                  styles.image
                } ${loading ? `${styles.loading}` : ``}`}
                onLoad={() => setLoading(false)}
              />
            </div>
            <div className='lg:mt-[40px]'>
              <h1 className='text-3xl font-bold mb-2'>
                I am <span className='text-[#ffbd39]'>Allan kipchumba,</span>
              </h1>
              <p className='uppercase tracking-[5px] mb-5'>
                A Mid-level Software Engineer.
              </p>

              <p>
                I am a self-taught mid-level software engineer with over 4 years
                of experience in building web applications using JavaScript and
                TypeScript. My journey has taken me through several
                organizations, including Adanian Labs, Mzizi, and Kwaju Africa,
                where I honed my problem-solving skills. With a solid
                engineering background, I bring a strong technical foundation
                and an innovative approach to addressing business challenges,
                always keeping the unique needs of each project in focus.{' '}
              </p>
              <br />
              <p>
                As an effective team player, I excel in collaboration and
                communication, and I have a proven track record of delivering
                high-quality, secure applications. I am excited about the
                opportunity to work together to build or revamp your web
                application.
              </p>
              <Link
                activeClass='active'
                to='footer'
                spy={true}
                smooth={true}
                offset={-65}
                duration={1000}
              >
                <button>Let's connect</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
