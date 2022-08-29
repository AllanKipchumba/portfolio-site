import React, { useState } from "react";
import rest from "../assets/rest.png";

export const TaskmanagerApi = () => {
  const [hide, setHide] = useState(false);
  return (
    <>
      <img src={rest} alt="rest-api" />
      <h1>Task Manager API</h1>
      <p>
        A rest API that authenticated users can use to create and track tasks.
        It is a simple API that allows users to add, change, and delete jobs.
      </p>

      <button onClick={() => setHide(!hide)} className="btn">
        {hide ? `Close` : `See More`}
      </button>

      {hide && (
        <div>
          <p>
            A rest API that authenticated users can use to create and track
            tasks. It is a simple API that allows users to add, change, and
            delete jobs. <br />
            <span>Technologies: Node, Express, MongoDB</span>
          </p>

          <button>
            <a href="https://github.com/AllanKipchumba/task-manager-api">
              view code
            </a>
          </button>
        </div>
      )}
    </>
  );
};
