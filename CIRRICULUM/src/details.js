import React from 'react';
import { useParams } from 'react-router-dom';

 function Details  ({ predictions }) {
  const { title } = useParams(); // Get the course title from the URL
  const course = predictions.courses.find((c) => c.title === title);

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>Skills: {course.skills.join(', ')}</p>
    </div>
  );
};

export default Details;
