import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Sogy } from "./pages/portfolio/landing-page/Sogy";
import { SimonGame } from "./pages/portfolio/simon-game/SimonGame";
import { StoryHub } from "./pages/portfolio/storyhub/StoryHub";
import { TaskmanagerApi } from "./pages/portfolio/taskmanager/TaskmanagerApi";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/storyhub" element={<StoryHub />} />
        <Route path="taskmanagerAPI" element={<TaskmanagerApi />} />
        <Route path="simon-game-clone" element={<SimonGame />} />
        <Route path="landing-page" element={<Sogy />} />
      </Routes>
    </>
  );
};
