import React, { useState } from "react";
import storyhub from "../assets/storyhub.JPG";

export const StoryHub = () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <img src={storyhub} alt="storyhub" />
      <h1>StoryHub</h1>
      <p>
        StoryHub is an informational website that authenticated users can
        publish and access previously published information...
      </p>

      <button onClick={() => setHide(!hide)} className="btn">
        {hide ? `Close` : `See More`}
      </button>

      {hide && (
        <div className="more-info">
          <p>
            StoryHub is a website that allows people to publish and access
            previously published information. This project was really beneficial
            as it allowed me to blend my front-end and back- end skills.
            <br />
            <span>
              {" "}
              Technologies: React, Redux, Sass, Tailwind, Node, Express, MongoDB
            </span>
          </p>

          <button>
            <a href="https://storyhub-ui.netlify.app/">view demo</a>
          </button>
          <button>
            <a href="https://github.com/AllanKipchumba/blog_UI">View Code</a>
          </button>
        </div>
      )}
    </>
  );
};
