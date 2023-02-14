import React from "react";
import "./skills.scss";
import ProgressBar from "@ramonak/react-progress-bar";

export const Skills = () => {
  return (
    <>
      <div className="skills pb-[50px]" id="skills">
        <h1 className="pt-14 foo pb-5 capitalize text-[50px] font-[700] leading-[75px] text-center">
          my skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[80%] gap-14 p-10 mx-auto">
          <div>
            <div>
              <p>JavaScript</p>
              <ProgressBar
                completed={90}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
            <div>
              <p>React</p>
              <ProgressBar
                completed={99}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
            <div>
              <p>TypeScript</p>
              <ProgressBar
                completed={95}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
            <div>
              <p>Firebase</p>
              <ProgressBar
                completed={95}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
            <div>
              <p>Redux</p>
              <ProgressBar
                completed={95}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
            <div>
              <p>Sass</p>
              <ProgressBar
                completed={98}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
            <div>
              <p>Tailwind css</p>
              <ProgressBar
                completed={95}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
          </div>
          <div>
            <div>
              <p>Node.js</p>
              <ProgressBar
                completed={85}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
            <div>
              <p>Express.js</p>
              <ProgressBar
                completed={87}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
            <div>
              <p>MongoDB</p>
              <ProgressBar
                completed={85}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
            <div>
              <p>Git</p>
              <ProgressBar
                completed={98}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
            <div>
              <p>Postman</p>
              <ProgressBar
                completed={94}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
            <div>
              <p>SEO</p>
              <ProgressBar
                completed={90}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
