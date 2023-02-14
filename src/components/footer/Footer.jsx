import React from "react";
import "./footer.scss";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { Link, animateScroll as scroll } from "react-scroll";

export const Footer = () => {
  return (
    <div className="footer py-14" id="footer">
      <div className="max-w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-12">
          <div className="md:col-span-2">
            <h1>About</h1>
            <p className="text-[#808080]">
              Welcome to Allan Kipchumba's official website. As a dedicated
              software engineer, I am passionate about all aspects of coding. I
              find coding to be a fascinating field that sharpens one's
              creativity, intellect, and strategic thinking abilities.
            </p>

            <p className="mt-4">Let's connect</p>

            <div className="flex gap-2 mt-4">
              <a href="https://github.com/AllanKipchumba" target="self">
                <div className="icon">
                  <AiOutlineGithub />
                </div>
              </a>
              <a href="https://twitter.com/devAllan_" target="self">
                <div className="icon">
                  <AiOutlineTwitter />
                </div>
              </a>
              <a
                href="https://www.instagram.com/allan_kipchumba/"
                target="self"
              >
                <div className="icon">
                  <AiOutlineInstagram />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/allan-kipchumba-0504b51b7/"
                target="self"
              >
                <div className="icon">
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
                home
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={1000}
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="skills"
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
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={1000}
                >
                  projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h1>Have an inquiry?</h1>
            <div>
              <div className="flex gap-2 mb-6">
                <BsFillTelephoneFill />
                <p className="text-[#808080]">+2547 22 419 582</p>
              </div>
              <div className="flex gap-2">
                <SiMinutemailer />
                <a
                  href="mailto:allankipchumba@gmail.com"
                  className="text-[#808080]"
                >
                  allankipchumba76@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <p className="text-[#E6E6E6]">
            Copyright &copy; {new Date().getFullYear()} | AllanKipchumba
          </p>
        </div>
      </div>
    </div>
  );
};
