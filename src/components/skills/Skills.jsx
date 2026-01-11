import React from 'react';
import './skills.scss';
import ProgressBar from '@ramonak/react-progress-bar';

//skills component
export const Skills = () => {
  return (
    <>
      <div className='skills pb-[50px]' id='skills'>
        <h1 className='pt-14 foo pb-5 capitalize text-[50px] font-[700] leading-[75px] text-center'>
          Technical Skills
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 max-w-[80%] gap-14 p-10 mx-auto'>
          <div>
            <div>
              <p>Backend Systems Design & Development</p>
              <ProgressBar
                completed={95}
                bgColor='#ffbd39'
                baseBgColor='#1a1a1a'
                isLabelVisible={false}
                transitionDuration='2s'
                animateOnRender={true}
                height='10px'
              />
            </div>

            <div>
              <p>Software Architecture</p>
              <ProgressBar
                completed={92}
                bgColor='#ffbd39'
                baseBgColor='#1a1a1a'
                isLabelVisible={false}
                transitionDuration='2s'
                animateOnRender={true}
                height='10px'
              />
            </div>

            <div>
              <p>System Design</p>
              <ProgressBar
                completed={93}
                bgColor='#ffbd39'
                baseBgColor='#1a1a1a'
                isLabelVisible={false}
                transitionDuration='2s'
                animateOnRender={true}
                height='10px'
              />
            </div>

            <div>
              <p>Website Development</p>
              <ProgressBar
                completed={95}
                bgColor='#ffbd39'
                baseBgColor='#1a1a1a'
                isLabelVisible={false}
                transitionDuration='2s'
                animateOnRender={true}
                height='10px'
              />
            </div>

            <div>
              <p>Microservices Architecture</p>
              <ProgressBar
                completed={94}
                bgColor='#ffbd39'
                baseBgColor='#1a1a1a'
                isLabelVisible={false}
                transitionDuration='2s'
                animateOnRender={true}
                height='10px'
              />
            </div>
          </div>
          <div>
            <div>
              <p>Event-Driven Systems Design</p>
              <ProgressBar
                completed={90}
                bgColor='#ffbd39'
                baseBgColor='#1a1a1a'
                isLabelVisible={false}
                transitionDuration='2s'
                animateOnRender={true}
                height='10px'
              />
            </div>

            <div>
              <p>Database Design & Administration</p>
              <ProgressBar
                completed={93}
                bgColor='#ffbd39'
                baseBgColor='#1a1a1a'
                isLabelVisible={false}
                transitionDuration='2s'
                animateOnRender={true}
                height='10px'
              />
            </div>

            <div>
              <p>AI Integration in Business</p>
              <ProgressBar
                completed={88}
                bgColor='#ffbd39'
                baseBgColor='#1a1a1a'
                isLabelVisible={false}
                transitionDuration='2s'
                animateOnRender={true}
                height='10px'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
