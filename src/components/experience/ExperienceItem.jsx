import React from 'react';

export const ExperienceItem = ({ 
  dates, 
  title, 
  company, 
  summary 
}) => {
  return (
    <>
      <div>
        <h1>{dates}</h1>
        <h2>{title}</h2>
        <h3>{company}</h3>
        {summary && <p>{summary}</p>}
      </div>
    </>
  );
};

