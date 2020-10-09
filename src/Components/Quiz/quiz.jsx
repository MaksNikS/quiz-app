import React from 'react';
import QuizCard from '../QuizCard';
import Styles from './quiz.module.css';

const Quiz = ({ quizData }) => {
    return (
        <div className={Styles.quiz}>
            {quizData?.map((quiz) => (
                <ul key={quiz.id} className={Styles.quiz__quests}>
                    <li className={Styles.quiz__item}>{quiz.question}</li>
                    <QuizCard quizAnswers={quiz.answers} />
                </ul>
            ))}
        </div>
    );
};

export default Quiz;
