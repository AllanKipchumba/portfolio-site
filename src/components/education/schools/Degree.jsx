import React, { useState } from "react";

export const Degree = () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <h1>2018 - present</h1>
      <h2>Bachelor's Degree of Engineering</h2>
      <h3>moi university</h3>
      <button onClick={() => setHide(!hide)}>
        {hide ? `Close` : `Read More`}
      </button>

      {hide && (
        <p>
          I am an electrical and electronics engineering student. I'm in my
          fourth year(2022) of college. Everything about the engineering
          curriculum appeals to me because it encourages students to think
          outside the box. The development of logical thinking, objectivity,
          critical thinking, and creativity has greatly influenced how I see the
          world.
        </p>
      )}
    </>
  );
};
