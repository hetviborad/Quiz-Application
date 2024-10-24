import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quizzes from '../data/quizzes';

const Quiz = () => {
  const { id } = useParams();
  const quiz = quizzes.find((q) => q.id === parseInt(id));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (selectedOption === quiz.questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate(`/score-summary/${id}?score=${score + 1}`);
    }
  };

  return (
    <div className="container mt-4">
      <h2>{quiz.title}</h2>
      <p>{quiz.questions[currentQuestion].question}</p>
      <ul className="list-group">
        {quiz.questions[currentQuestion].options.map((option, index) => (
          <li key={index} className={`list-group-item ${selectedOption === index ? 'active' : ''}`}
              onClick={() => setSelectedOption(index)}>
            {option}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3" onClick={handleNextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default Quiz;
