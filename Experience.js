// src/components/Experience.js
import React from 'react';

function Experience({ company, role, years }) {
  return (
    <div className="experience">
      <h3>Experience</h3>
      <p><b>Company:</b> {company}</p>
      <p><b>Role:</b> {role}</p>
      <p><b>Years:</b> {years}</p>
    </div>
  );
}

export default Experience;
