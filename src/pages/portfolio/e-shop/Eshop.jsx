import React, { useEffect } from "react";
import "../main.scss";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";

export const Eshop = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-container bg-[#212124]">
      <div className="project-heading-e-shop">
        <div className="md:ml-16 lg:ml-32">
          <h1>e-shop</h1>
          <p>React/ Firebase / Node</p>
        </div>
      </div>

      <div className="pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-8">
        <Fade top>
          <div className="md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3">
            <h2 className="capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]">
              Overview
            </h2>
            <p className="text-[#bdc1c6]">
              The e-shop is an e-commerce website where users can easily browse
              and purchase various items online. The website has a user-friendly
              interface that allows users to select items from different
              categories and add them to their shopping cart. The cart feature
              ensures that users can keep track of their selected items and make
              any necessary changes before proceeding to checkout.
              <br /> <br />
              The website utilizes Firebase to handle data storage, database
              management, and user authentication. Firebase's robust and secure
              backend technology ensures that user data is safely stored and
              easily accessible. With this technology, the website can support a
              high volume of users, making it scalable for growth.
              <br /> <br />
              Overall, the e-shop website concept aims to provide a seamless and
              enjoyable online shopping experience for users, while also
              providing secure and reliable technology to support the platform.
            </p>

            <div className="btn">
              <button>
                <a href="https://e-shop-client.onrender.com/" target="self">
                  demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/AllanKipchumba/e-shop"
                  target="self"
                >
                  code
                </a>
              </button>
            </div>
          </div>
        </Fade>
        <div className="mb-4">
          <h3 className="text-[25px] leading-[75px]  text-[#ffbd39] ">
            Technologies
          </h3>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Firebase</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[80%] mx-auto">
        <button onClick={() => navigate(-1)} className="back-btn">
          back
        </button>
      </div>
    </div>
  );
};
