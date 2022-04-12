import { useEffect, useState } from 'react';
import './Quiz.css';
import Question from '../../components/Question/Question.js';
import { checkPropTypes } from 'prop-types';
import axios from 'axios';

const Quiz = ({ score, setScore  }) => {

  const [questions, setQuestions] = useState([])
  const [options, setOptions] = useState()
  const [currentQusetion, setCurrentQusetion] = useState(0)

 useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=100`)
      .then(res => {
        // const persons = res.data;
        // this.setState({ persons });
        console.log(res.data)

        setTimeout(() => {
          setQuestions(res.data.results);
        }, 1000);
      });
  }, []);

  console.log(options);

  const handleShuffle = (quesOptions) => {
    return quesOptions.sort(() => Math.random() - 0.5);
  };

  const onAnswerClick = (answer) => {
    console.log(answer);
    // score + 10 in case is correct
    if(answer === questions[currentQusetion].correct_answer ) {
      setScore(score + 10)
    }
    // move to next question
    setCurrentQusetion(currentQusetion + 1)
  };


  return (
    <div className='quiz'>
      <div className='quizScore'>
        <span>Score: {score}</span>
      </div>

      <Question 
        currentQusetion={currentQusetion}
        questionText={questions[currentQusetion]}
        setCurrentQusetion={setCurrentQusetion}
        questions={questions}
        options={questions && questions[currentQusetion] ? questions[currentQusetion].incorrect_answers: new Array(4)}
        correctAnswer={questions && questions[currentQusetion] ? questions[currentQusetion].correct_answer : ""}
        score={score}
        setQuestions={setQuestions}
        onAnswerClick={onAnswerClick}
      />

    </div>
  )
};

export default Quiz