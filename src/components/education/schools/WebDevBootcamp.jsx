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
          My desire to learn web technologies led me to Dr. Angela Yu's 5-month
          Coding Boot camp at App Brewery. I am proud of the boot camp because
          it taught me the fundamentals of web development from start to finish;
          the design phase, color theory, HTML5, CSS3, JavaScript, Git and
          GitHub, command line interface, Node.js, Express, MongoDB, and
          React.js were all taught in a project-based approach. This increased
          my stamina for web design and development. Debugging techniques, which
          manifest to be a valuable asset to any developer, were thoroughly
          covered here. Professional developer best practices were thoroughly
          taught because software development ethics and professionalism are
          just as important as the software itself. The boot camp also
          challenged us to constantly learn new skills in order to maintain our
          value in the industry because software rapidly evolves and the only
          way to maintain our relevance and keep up our skills is to keep
          learning. This has greatly motivated me to consistently learn new
          skills whenever the opportunity arises.
        </p>
      )}
    </>
  );
};
