import React, { useState } from "react";

export const DesignThinking = () => {
  const [hide, setHide] = useState(false);
  return (
    <>
      <h1>May2022</h1>
      <h2>Design thinking</h2>
      <button onClick={() => setHide(!hide)}>
        {hide ? `Close` : `Read More`}
      </button>
      {hide && (
        <p>
          How to define problems in a human-centric manner. The dangers of
          unconscious bias The importance of prototyping and iteration Including
          diversity in your thinking Learn how to use the design thinking
          framework to solve a variety of problems. The significance of
          brainstorming and ideation
        </p>
      )}
    </>
  );
};
