// src/components/FeedbackForm.js
import React, { useState } from 'react';
//import { FaStar} from 'react-icons/fa'
function FeedbackForm  ({ submitFeedback, feedbacks1 })  {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFeedback({ rating, comments });
    setRating(0);
    setComments('');
  };

  return ( < div className='fedcont'>
    <div className="feedback-form">
      <h3>Provide Feedback</h3>
      <form onSubmit={handleSubmit}>
        <label>Rating (1 to 5):</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <label>Comments:</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>     <div className="feedback-display">
        <h3>Past Feedback</h3> <div className='fed'>
        {feedbacks1.slice(-3).map((fb, index) => (
          <div key={index} className='feddis'>
            <p>Rating: {fb.rating} </p>
            <p>Comments: {fb.comments}</p>
          </div>
        ))} </div>
      </div> </div>
  );
};

export default FeedbackForm;
