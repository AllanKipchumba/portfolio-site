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
              My interest in learning about backend technologies led me to
              Andrew Mead's Udemy course; (he's an excellent instructor by the
              way). Node.js is a JavaScript runtime built on Chrome's V8 JS
              Engine that allows JavaScript to be used in Web Servers. This
              course expanded my knowledge of REST APIs, non-relational
              databases, server-side authentication, and Postman API testing.
              The numerous projects completed during the course provided me with
              hands-on experience with the most recent ES6/ES7 JavaScript,
              creating web servers and APIs with Express, data storage with the
              Mongoose and MongoDB data storage systems. I also learned how to
              consume important backed APIs in order to build stable and
              scalable applications. SocketIO APIs were used to build real-time
              web apps, and JWT tokens were used to restrict access to protected
              routes in applications, just to mention a few. The deployment of
              Node.js applications to production environments was thoroughly
              discussed. This course provided a solid foundation for my
              knowledge of backend technologies. I am very interested in
              learning more about this technology and creating many amazing
              projects that will solve modern societal problems.
            </p>{" "}
            <Link
              activeClass="active"
              to="education"
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
