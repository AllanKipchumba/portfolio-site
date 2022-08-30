import React from "react";
import "./footer.scss";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

export const Footer = () => {
  return (
    <>
      <div className="footer py-14" id="footer">
        <div className="max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            <div>
              <h1>About</h1>
              <p>
                This is the official website for Allan Kipchumba. Allan is a
                passionate developer who is deeply invested in software
                engineering and loves everything about coding. coding is
                intriguing as it shappens one's wits, creative thinking and
                strategic thinking skills. you pay more attention to detail in
                your environment.
              </p>
              <h2>You can find me on</h2>
              <div className="flex">
                <a href="#">
                  <AiOutlineGithub className="icon" />
                </a>
                <a href="#">
                  <AiOutlineTwitter className="icon" />
                </a>
                <a href="#">
                  <AiOutlineInstagram className="icon" />
                </a>
                <a href="#">
                  <BsFacebook className="icon" />
                </a>
              </div>
            </div>
            <div>
              <h1>Quick links</h1>
              <ul>
                <li>home</li>
                <li>about</li>
                <li>skills</li>
                <li>projects</li>
                <li>contact</li>
              </ul>
            </div>
            <div>
              <h1>Have an inquiry?</h1>
              <div>
                <div>
                  <BsFillTelephoneFill />
                  <p className="text-[#808080]">+2547 22 419 582</p>
                </div>
                <div>
                  <SiMinutemailer />
                  <p className="text-[#808080]">allankipchumba76@gmail.com</p>
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
    </>
  );
};

// 1. Refactored menu items to one js file, menuItems.js 2. removed MenuButtons
// component. the comonentwas rendering a button element which can be directly rende red in the Menu.jsx file. 3. Added key to button in Menu.jsx 4. update state to index of buton clickedt
