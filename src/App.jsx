import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { StoryHub } from "./pages/portfolio/storyhub/StoryHub";
import { TaskmanagerApi } from "./pages/portfolio/taskmanager/TaskmanagerApi";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/storyhub" element={<StoryHub />} />
        <Route path="taskmanagerAPI" element={<TaskmanagerApi />} />
      </Routes>
    </>
  );
};
