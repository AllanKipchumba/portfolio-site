import React from 'react';
import './projects.scss';
import { Link } from 'react-router-dom';

export const Projects = () => {
  return (
    <>
      <div className='projects' id='projects'>
        <h1 className='foo py-10 capitalize text-[50px] font-[700] leading-[75px] text-center'>
          Projects
        </h1>
        <div className='container grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[80%] mx-auto pb-[100px]'>
          <div>
            <h1>Clean Receipts</h1>
            <button>
              <Link to='/clean-receipts'>read more</Link>
            </button>
          </div>
          <div>
            <h1>Hover Marketing Agency</h1>
            <button>
              <Link to='/hover-marketing'>read more</Link>
            </button>
          </div>
          <div>
            <h1>Destiny Advertising</h1>
            <button>
              <Link to='/destiny-advertising'>read more</Link>
            </button>
          </div>
          <div>
            <h1>Wazo Hive</h1>
            <button>
              <Link to='/wazo-hive'>read more</Link>
            </button>
          </div>
          <div>
            <h1>AfyaLife Foundation</h1>
            <button>
              <Link to='/afyalife-foundation'>read more</Link>
            </button>
          </div>
          <div>
            <h1>Kim Bronze</h1>
            <button>
              <Link to='/kim-bronze'>read more</Link>
            </button>
          </div>
          <div>
            <h1>Mzizi App</h1>
            <button>
              <Link to='/mziziapp'>read more</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
