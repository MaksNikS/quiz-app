import React, { useState } from 'react';
import QuizCard from '../QuizCard';
import Styles from './quiz.module.css';

const Quiz = ({ quizData }) => {
    const [position, setPosition] = useState(0);
    const [score, setScore] = useState(0);

    const handleCheckAnswer = (answerNum) => {
        const answers = Object.values(quizData[position].correct_answers);

        if (answers[answerNum] === 'true') {
            setScore(score + 1);
        }
        if (position < quizData.length) {
            setPosition(position + 1);
        }
    };

    return (
        (position < quizData.length) ? (
            <div className={Styles.quiz}>
                <div key={quizData[position].id} className={Styles.quiz__quests}>
                    <span className={Styles.quiz__item}>{quizData[position].question}</span>
                    <QuizCard handleClick={handleCheckAnswer} quizAnswers={quizData[position].answers} />
                </div>
            </div>            
        ) : (
            <h1>{`Result: ${score}`}</h1>
            // <Result />
        )
    );
};

export default Quiz;
