import React from 'react';
import { Link } from 'react-router-dom';
import quizzes from '../data/quizzes';

const QuizList = () => (
  <div className="container mt-4">
    <h2>Available Quizzes</h2>
    <ul className="list-group">
      {quizzes.map((quiz) => (
        <li key={quiz.id} className="list-group-item">
          <h5>{quiz.title}</h5>
          <p>{quiz.description}</p>
          <Link to={`/quiz/${quiz.id}`} className="btn btn-primary">Start Quiz</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default QuizList;