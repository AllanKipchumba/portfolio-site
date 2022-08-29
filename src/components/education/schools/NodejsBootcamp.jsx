import React, { useState } from "react";

export const NodejsBootcamp = () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <h1>Nov2021 - March2022</h1>
      <h2>Node Js Bootcamp</h2>
      <h3>Udemy - Andrew Mead</h3>
      <button onClick={() => setHide(!hide)}>
        {hide ? `Close` : `Read More`}
      </button>
      {hide && (
        <p>
          Create web servers and APIs with Express. Use the most recent ES6/ES7
          JavaScript. SocketIO allows you to build real-time web apps. Mongoose
          and MongoDB are data storage systems. Deploy your Node applications to
          production.
        </p>
      )}
    </>
  );
};
