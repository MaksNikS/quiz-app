import React, { useState, useEffect } from 'react';
import { API_KEY } from './constants';
import Preloader from './Components/Preloader';
import Quiz from './Components/Quiz';
import './App.css';

// Quiz = {
//   answers: {answer_a: "Go", answer_b: "C++", answer_c: "Java", answer_d: "C", answer_e: null, answer_f: null}
//   category: "Linux"
//   correct_answer: "answer_a"
//   correct_answers: {answer_a_correct: "true", answer_b_correct: "false", answer_c_correct: "false",…}
//   description: null
//   difficulty: "Easy"
//   explanation: "The Kubernetes project is written in the Go programming language, and you can browse its source code on GitHub."
//   id: 715
//   multiple_correct_answers: "false"
//   question: "What language was Kubernetes written in?"
//   tags: [{name: "Kubernetes"}]
//   tip: null
// }

function App() {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&limit=10f&category=Linux`);

    if (data) {
      const json = await data.json();
      setQuizData(json);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      APP QUIZ
      {loading ? <Preloader /> : (
        quizData && (
          <Quiz quizData={quizData} />
        )
      )}
    </div>
  );
}

export default App;
