import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/index';
import { MziziApp } from './pages/portfolio/mzizi/MziziApp';
import { CleanReceipts } from './pages/portfolio/clean-receipts/CleanReceipts';
import { HoverMarketing } from './pages/portfolio/hover-marketing/HoverMarketing';
import { DestinyAdvertising } from './pages/portfolio/destiny-advertising/DestinyAdvertising';
import { WazoHive } from './pages/portfolio/wazo-hive/WazoHive';
import { AfyaLifeFoundation } from './pages/portfolio/afyalife-foundation/AfyaLifeFoundation';
import { KimBronze } from './pages/portfolio/kim-bronze/KimBronze';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='clean-receipts' element={<CleanReceipts />} />
        <Route path='hover-marketing' element={<HoverMarketing />} />
        <Route path='destiny-advertising' element={<DestinyAdvertising />} />
        <Route path='wazo-hive' element={<WazoHive />} />
        <Route path='afyalife-foundation' element={<AfyaLifeFoundation />} />
        <Route path='kim-bronze' element={<KimBronze />} />
        <Route path='mziziapp' element={<MziziApp />} />
      </Routes>
    </>
  );
};
