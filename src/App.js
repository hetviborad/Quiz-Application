import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizList from './components/QuizList';
import Quiz from './components/Quiz';
import ScoreSummary from './components/ScoreSummary';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<QuizList />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/score-summary/:id" element={<ScoreSummary />} />
    </Routes>
  </Router>
);

export default App;
