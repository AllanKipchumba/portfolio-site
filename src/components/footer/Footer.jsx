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
          <div className="flex gap-5 justify-center">
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
          <div className="flex  gap-8 justify-center mt-8">
            <div>
              <BsFillTelephoneFill />
              <p className="text-[#808080]">+2547 22 419 582</p>
            </div>
            <div>
              <SiMinutemailer />
              <p className="text-[#808080]">allankipchumba76@gmail.com</p>
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
