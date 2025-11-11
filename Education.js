// src/components/Education.js
import React from 'react';

function Education({ education }) {
  return (
    <div className="education">
      <h3>Education</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Place</th>
            <th>Education</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {education.map((edu) => (
            <tr key={edu.id}>
              <td>{edu.id}</td>
              <td>{edu.name}</td>
              <td>{edu.place}</td>
              <td>{edu.education}</td>
              <td>{edu.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Education;
