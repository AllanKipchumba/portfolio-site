import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";

export const NodejsBootcamp = () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <h1>Nov2021 - March2022</h1>
      <h2>Node Js Bootcamp</h2>
      <h3>Udemy - Andrew Mead</h3>
      <button onClick={() => setHide(!hide)}>Read More</button>

      {hide && (
        <Fade left>
          <div className="readmore md:left-[-40vw]">
            <h1>node js Bootcamp</h1>
            <h2>Udemy</h2>
            <p>
              I was driven by my interest in backend technologies to take Andrew
              Mead's Udemy course, and I was impressed by his exceptional
              teaching abilities. Node.js, a JavaScript runtime built on
              Chrome's V8 JS Engine, was the focus of the course. This
              technology allows for the use of JavaScript in web servers.
              Through the course, I deepened my understanding of REST APIs,
              non-relational databases, server-side authentication, and Postman
              API testing. <br /> <br /> The numerous hands-on projects
              completed during the course gave me practical experience with the
              latest ES6/ES7 JavaScript, building web servers and APIs with
              Express, and storing data using Mongoose and MongoDB. I also
              learned how to consume essential backend APIs to create robust and
              scalable applications. The use of SocketIO APIs in building
              real-time web apps and JWT tokens for restricting access to
              protected routes in applications are among the highlights. <br />{" "}
              <br />
              The course covered the deployment of Node.js applications to
              production environments in detail, providing me with a strong
              foundation in backend technologies. I am eager to continue
              learning and using this technology to create innovative solutions
              to modern problems.
            </p>
            <Link
              activeClass="active"
              to="degree"
              spy={true}
              smooth={true}
              offset={-65}
              duration={1000}
            >
              <button onClick={() => setHide(!hide)} className="lg:!mb-[50px]">
                {" "}
                close{" "}
              </button>
            </Link>
          </div>
        </Fade>
      )}
    </>
  );
};
