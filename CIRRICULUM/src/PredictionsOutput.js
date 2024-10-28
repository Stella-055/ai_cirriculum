// src/components/PredictionsOutput.js
import {React} from 'react';
import { Link } from 'react-router-dom';
import Historicdata from './historicdata';
function PredictionsOutput ({ predictions })  {
  return (
    <div className='come2'>
      <h2>Curriculum Suggestions</h2><div >
      <ul className='come1'>
        {predictions.courses.map((course, index) => (
          <li key={index}>
            <div className='come'><h4>{course.title}</h4>
            <p>Skills: {course.skills.join(', ')}</p>
            <Link to={`/course-details/${course.title}`}> click to see   </Link>
            </div> 
          </li>
        ))}
      </ul>  
      </div>
      <Historicdata/>
     
     
    </div>
  );
};

export default PredictionsOutput;
