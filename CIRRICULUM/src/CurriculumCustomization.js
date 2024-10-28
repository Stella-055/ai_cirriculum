// src/components/CurriculumCustomization.js
import React, { useState } from 'react';

function CurriculumCustomization  ({ curriculum, onSave }) {
  const [modifiedCurriculum, setModifiedCurriculum] = useState(curriculum);

  const handleCourseChange = (index, field, value) => {
    const newCurriculum = [...modifiedCurriculum];
    newCurriculum[index][field] = value;
    setModifiedCurriculum(newCurriculum);
  };

  const handleSave = () => {
    onSave(modifiedCurriculum); // Save modified curriculum
  };

  return (
    <div>
      <h2>Customize Curriculum</h2>
      {modifiedCurriculum.map((course, index) => (
        <div key={index}>
          <input
            type="text"
            value={course.title}
            onChange={(e) => handleCourseChange(index, 'title', e.target.value)}
          />
          <input
            type="text"
            value={course.skills.join(', ')}
            onChange={(e) => handleCourseChange(index, 'skills', e.target.value.split(', '))}
          />
        </div>
      ))}
      <button onClick={handleSave}>Save Curriculum</button>
    </div>
  );
};

export default CurriculumCustomization;
