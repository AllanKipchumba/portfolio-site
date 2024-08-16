import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  TaskmanagerApi,
  SimonGame,
  Sogy,
  Eshop,
  StoryHub,
  Rylan,
  TickettingApp,
} from './pages/index';
import { MziziApp } from './pages/portfolio/mzizi/MziziApp';
import { MwalimuAI } from './pages/portfolio/mwalimuai/MwalimuAI';
import { AgraAi } from './pages/portfolio/agraai/AgraAi';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='e-shop' element={<Eshop />} />
        <Route path='storyhub' element={<StoryHub />} />
        <Route path='taskmanagerAPI' element={<TaskmanagerApi />} />
        <Route path='simon-game-clone' element={<SimonGame />} />
        <Route path='landing-page' element={<Sogy />} />
        <Route path='rylan_laundry_DMS' element={<Rylan />} />
        <Route path='ticketing-app' element={<TickettingApp />} />
        <Route path='mziziapp' element={<MziziApp />} />
        <Route path='mwalimu_ai' element={<MwalimuAI />} />
        <Route path='agra_ai' element={<AgraAi />} />
      </Routes>
    </>
  );
};
