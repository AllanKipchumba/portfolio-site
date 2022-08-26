import React from "react";
import "./skills.scss";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills() {
  return (
    <>
      <div className="skills pb-[100px]">
        <h1 className="py-14 capitalize text-[50px] font-[700] leading-[75px] text-center">
          my skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[80%] gap-14 p-10 mx-auto">
          <div>
            <div>
              <p>
                JavaScript <span>80%</span>
              </p>
              <ProgressBar
                completed={80}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
            <div>
              <p>
                React.js <span>90%</span>
              </p>
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
              <p>
                Redux <span>95%</span>
              </p>
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
              <p>
                Sass <span>98%</span>
              </p>
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
              <p>
                Tailwind css <span>95%</span>
              </p>
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
              <p>
                Node.js <span>70%</span>
              </p>
              <ProgressBar
                completed={70}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
            <div>
              <p>
                Express.js <span>75%</span>
              </p>
              <ProgressBar
                completed={75}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
            <div>
              <p>
                MongoDB <span>80%</span>
              </p>
              <ProgressBar
                completed={80}
                bgColor="#ffbd39"
                baseBgColor="#1a1a1a"
                isLabelVisible={false}
                transitionDuration="2s"
                animateOnRender={true}
                height="10px"
              />
            </div>
            <div>
              <p>
                Git <span>95%</span>
              </p>
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
              <p>
                Postman <span>76%</span>
              </p>
              <ProgressBar
                completed={76}
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
}
