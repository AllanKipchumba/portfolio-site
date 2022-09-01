import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { StoryHub } from "./pages/portfolio/storyhub/StoryHub";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/storyhub" element={<StoryHub />} />
      </Routes>
    </>
  );
};
