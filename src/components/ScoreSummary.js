import React from 'react';
import { useLocation } from 'react-router-dom';
import quizzes from '../data/quizzes';

const ScoreSummary = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const score = params.get('score');
  const id = location.pathname.split('/')[2];
  const quiz = quizzes.find((q) => q.id === parseInt(id));

  return (
    <div className="container mt-4">
      <h2>Quiz Completed!</h2>
      <p>Your score: {score}/{quiz.questions.length}</p>
      <ul className="list-group">
        {quiz.questions.map((q, index) => (
          <li key={index} className="list-group-item">
            {q.question} <br />
            Correct answer: {q.options[q.answer]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreSummary;
