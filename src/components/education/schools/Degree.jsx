import React, { useState } from "react";

export const Degree = () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <h1>2018 - present</h1>
      <h2>Bachelor of Engineering</h2>
      <h3>moi university</h3>
      <button onClick={() => setHide(!hide)}>
        {hide ? `Close` : `Read More`}
      </button>

      {hide && (
        <p>
          I am a fourth-year Electrical and Electronics Engineering student at
          Moi University. Problem solving is central to the engineering
          curriculum. The curriculum fundamentally covers a wide range of
          subjects, including mechanics, telecommunications, electronics, power,
          computer engineering, advanced mathematics, and applied physics. This
          instills a great deal of creativity, critical thinking, logical
          thinking, objectivity, and discipline. Furthermore, the curriculum
          teaches you to think outside the box, pay attention to details, and
          develop a broad range of technical thinking skills. When approaching a
          problem, you are constantly challenged to stretch your thinking and
          consider all possibilities. It is an intriguing STEM field that I
          would recommend to anyone that is immensely interested in Science,
          Technology, Engineering and Mathematics. Every experience I've had in
          engineering school is immensely valuable to me.
        </p>
      )}
    </>
  );
};
