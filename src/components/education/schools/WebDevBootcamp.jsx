import React, { useState } from "react";

export const WebDevBootcamp = () => {
  const [hide, setHide] = useState(false);
  return (
    <>
      <h1>March2021 - Jully2021</h1>
      <h2>Web development bootcamp</h2>
      <h3>App Brewery - Dr Angela Yu</h3>
      <button onClick={() => setHide(!hide)}>
        {hide ? `Close` : `Read More`}
      </button>
      {hide && (
        <p>
          App Brewery's 5-month Coding Bootcamp vy Dr. Angela Yu significantly
          improved my web design and development skills. I learned front-end and
          back-end development technologies. Learn React frontend development.
          Professional developer best practices were learned. I learned the most
          recent technologies, such as Javascript, React, Node, and even Web3
          development.
        </p>
      )}
    </>
  );
};
