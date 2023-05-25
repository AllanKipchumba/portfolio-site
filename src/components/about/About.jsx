import React from "react";
import styles from "./about.module.scss";
import { Link } from "react-scroll";
import { useState } from "react";

export const About = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div className={styles.about} id="about">
        <h1 className="foo py-14 capitalize text-[50px] font-[700] leading-[75px] text-center">
          about me
        </h1>

        <div className="relative  max-w-[80%] mx-auto pb-[100px]">
          <div className="gap-4 md:gap-10 lg:gap-0 grid grid-cols-1 md:grid-cols-2">
            <div className={`flex justify-center ${styles["image-container"]}`}>
              {loading && <div className={styles.shimmer}></div>}
              <img
                src="https://firebasestorage.googleapis.com/v0/b/storyhub-ced7b.appspot.com/o/images_prod%2F1676374364613profile.jpg?alt=media&token=c3e69bdd-0bbb-450d-b59d-1ad69d90af7d"
                alt="developer"
                className={`w-[50%] md:w-[100%] lg:w-[70%] ${styles.image} ${
                  loading ? `${styles.loading}` : ``
                }`}
                onLoad={() => setLoading(false)}
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
                I'm a driven full stack developer with a passion for technology
                and a constant desire to learn. I excel at solving complex
                problems and effectively communicating with teams. Building
                strong client relationships is a natural strength of mine, and I
                thrive in dynamic environments. I'm committed to continuous
                learning and staying up-to-date with industry trends. With a
                track record of delivering high-quality results, I'm confident
                in my ability to drive success in any development project.
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
