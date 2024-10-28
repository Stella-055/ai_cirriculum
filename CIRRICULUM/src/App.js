// src/App.js
import {React,useState} from 'react';
import FileUpload from './FileUpload';
import PredictionsOutput from './PredictionsOutput';
//import CurriculumCustomization from './CurriculumCustomization';
import FeedbackForm from './feedback';
import Sidebar from './sidenav';
import Home from './home';
import './App.css';
import Details from './details';
import {Routes,Route, useLocation}from 'react-router-dom'

function App() {
 
  const handleSubmitData = (data, type) => {
    if (type === 'file') {
      
      console.log('File uploaded:', data.get('file'));
    
    } else if (type === 'manual') {
  
      console.log('Manual input data:', data);
     
    }
  };
  const samplePredictions = {
    courses: [
      { title: 'Introduction to AI', skills: ['Python', 'Machine Learning'] },
      { title: 'Web Development', skills: ['JavaScript', 'React'], cirriculum:[' Fundamentals of Web Development'] },
      { title: '  Blockchain technologies', skills: ['Solidity', 'java'] }
    ],
  };
  
  const location = useLocation();
  const showNavbar = location.pathname !== '/home' && location.pathname!=='/';
  console.log(showNavbar)
  const initialFeedbacks = [
    { rating: 4, comments: 'Great suggestion! The curriculum aligns well with the job trends.' },
    { rating: 5, comments: 'Perfect match for what we need in our organization.' },
    { rating: 3, comments: 'The suggestions are good, but a bit more focus on AI would be great.' }
  ];
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);

  const handleFeedback = (feedback) => {
    setFeedbacks([...feedbacks, feedback]);
    console.log('New feedback submitted:', feedback);
  };
  return (<div className='cont'>
    <Sidebar />
    <div className="App">
    {showNavbar && <h1>Curriculum Development AI</h1>}
      
      <Routes>
     <Route path='/'element={<Home/>}/>
     <Route path='/home'element={<Home/>}/>
      <Route path='/suggestion'element={<PredictionsOutput predictions={samplePredictions} />}/>
      <Route path='/generate'element={<FileUpload  onSubmitData={handleSubmitData} />}/>
      <Route  path='/feedback' element={   <FeedbackForm feedbacks1={feedbacks} submitFeedback={handleFeedback} />}/>
      <Route path="/details/:id" element={<Details />} />
     </Routes>
   

    
      {/*
      {jobTrendsData && <TrendsChart trendsData={jobTrendsData.trends} />}
      
      {curriculum && !customizedCurriculum && (
        <PredictionsOutput predictions={curriculum} />
      )}

 
      {curriculum && !customizedCurriculum && (
        <CurriculumCustomization
          curriculum={curriculum.courses}
          onSave={handleSaveCustomization}
        />
      )}

      {customizedCurriculum && (
        <div>
          <h2>Customized Curriculum</h2>
          <ul>
            {customizedCurriculum.map((course, index) => (
              <li key={index}>
                <h4>{course.title}</h4>
                <p>Skills: {course.skills.join(', ')}</p>
              </li>
            ))}
          </ul>
        </div>
)}*/}
    </div>
    </div>);
}

export default App;
