import React from 'react';
import './footer.scss';
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';
import { Link, animateScroll as scroll } from 'react-scroll';

export const Footer = () => {
  return (
    <div className='footer py-14' id='footer'>
      <div className='max-w-[80%] mx-auto'>
        <div className='mb-6'>
          <h1>Services</h1>
          <p className='text-[#808080]'>
            I offer professional software development services tailored to your business
            needs. From elegant websites to complex, scalable web
            applications and backend systems, I deliver solutions that combine quality
            craftsmanship with efficient development practices. With expertise in system
            architecture, backend infrastructure, and software development, every
            project is customized to align with your objectives, technical requirements,
            and growth plans ensuring robust security, optimal performance, and scalability.
            Whether you're launching a new product, modernizing existing systems, or
            building AI-powered solutions, let's discuss how I can help bring your vision
            to life.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-12'>
          <div className='md:col-span-2'>
            <h1>Have an inquiry?</h1>
            <div>
              <div className='flex gap-2 mb-6'>
                <BsFillTelephoneFill />
                <p className='text-[#808080]'>+254722419582</p>
              </div>
              <div className='flex gap-2'>
                <SiMinutemailer />
                <a
                  href='mailto:allankipchumba@gmail.com'
                  className='text-[#808080]'
                >
                  allankipchumba76@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className='md:col-span-2'>
            <h1>Let's connect</h1>

            <div className='flex gap-2 mt-4'>
              <a href='https://github.com/AllanKipchumba' target='self'>
                <div className='icon'>
                  <AiOutlineGithub />
                </div>
              </a>
              <a href='https://twitter.com/devAllan_' target='self'>
                <div className='icon'>
                  <AiOutlineTwitter />
                </div>
              </a>
              {/* <a
                href="https://www.instagram.com/allan_kipchumba/"
                target="self"
              >
                <div className="icon">
                  <AiOutlineInstagram />
                </div>
              </a> */}

              <a
                href='https://www.linkedin.com/in/allan-kipchumba-0504b51b7/'
                target='self'
              >
                <div className='icon'>
                  <AiFillLinkedin />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h1>Quick links</h1>
            <ul>
              <li
                onClick={() => {
                  scroll.scrollToTop();
                }}
              >
                Home
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={1000}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='experience'
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={1000}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='skills'
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={1000}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={1000}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex justify-center mt-8'>
          <p className='text-[#E6E6E6]'>
            Copyright &copy; {new Date().getFullYear()} | AllanKipchumba
          </p>
        </div>
      </div>
    </div>
  );
};
