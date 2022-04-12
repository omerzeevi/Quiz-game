import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';


const Home = ({ fetchQuestions }) => {

  const navigate = useNavigate();

  const startQuiz = () => {
      navigate('/quiz');
  };

  return (
    <div className='homeContent'>
      <button className='startBtn' onClick={startQuiz}>
        Let's Go
      </button>
    </div>
  )
}

export default Home