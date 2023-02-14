import React from "react";
import "./about.scss";
import { Link } from "react-scroll";

export const About = () => {
  return (
    <>
      <div className="about" id="about">
        <h1 className="foo py-14 capitalize text-[50px] font-[700] leading-[75px] text-center">
          about me
        </h1>

        <div className="relative  max-w-[80%] mx-auto pb-[100px]">
          <div className="gap-4 md:gap-10 lg:gap-0 grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/storyhub-ced7b.appspot.com/o/images_prod%2F1676374364613profile.jpg?alt=media&token=c3e69bdd-0bbb-450d-b59d-1ad69d90af7d"
                alt="developer"
                className="w-[50%] md:w-[100%] lg:w-[70%] "
              />
            </div>
            <div className="lg:mt-[40px]">
              <h1 className="text-3xl font-bold mb-2">
                I am <span className="text-[#ffbd39]">Allan</span>
              </h1>
              <p className="uppercase tracking-[5px] mb-5">
                A Passionate Developer
              </p>

              <p>
                Strongly Passionate and driven developer with a constant desire
                to learn and improve. Highly organized and results-oriented, I
                take pride in my strong communication and problem-solving
                skills. I enjoy collaborating with others and believe in the
                power of teamwork to produce exceptional results. Skilled at
                making connections with people, I excel at building strong
                client relationships.
              </p>
              <Link
                activeClass="active"
                to="footer"
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
