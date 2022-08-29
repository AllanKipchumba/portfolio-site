import React, { useState } from "react";
import "./education.scss";
import { Degree } from "./schools/Degree";
import { DesignThinking } from "./schools/DesignThinking,";
import { NodejsBootcamp } from "./schools/NodejsBootcamp";
import { WebDevBootcamp } from "./schools/WebDevBootcamp";

export const Education = () => {
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(!hide);
  };
  return (
    <>
      <div className="education" id="education">
        <h1 className="py-14 capitalize text-[50px] font-[700] leading-[75px] text-center">
          Education
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[80%] mx-auto pb-[100px]">
          <ul>
            <li>
              <Degree />
            </li>

            <li>
              <WebDevBootcamp />
            </li>
          </ul>
          <ul>
            <li>
              <NodejsBootcamp />
            </li>
            <li>
              <DesignThinking />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
