import React, { useState } from "react";
import "./navbar.scss";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
  const [isMobile, setIsmobile] = useState(false);

  const handleClick = () => setIsmobile(false);
  return (
    <>
      <nav className="navbar">
        <h3>Allan</h3>

        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li onClick={handleClick}>home</li>
          <li onClick={handleClick}>about</li>
          <li onClick={handleClick}>skills</li>
          <li onClick={handleClick}>projects</li>
          <li onClick={handleClick}>contact</li>
        </ul>

        <button
          className="mobile-menu-icon"
          onClick={() => setIsmobile(!isMobile)}
        >
          {isMobile ? <AiOutlineClose size={30} /> : <FiMenu size={30} />}
        </button>
      </nav>
    </>
  );
};
