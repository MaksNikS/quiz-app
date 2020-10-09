import React from 'react';
import Styles from './quizCard.module.css';

const QuizCard = ({ quizAnswers, handleClick }) => {
    return (
        <div className={Styles.card}>
            <div className={Styles.card__question} onClick={() => handleClick(0)}>
                A:
                &nbsp;
                {quizAnswers['answer_a']}
            </div>
            <div className={Styles.card__question} onClick={() => handleClick(1)}>
                B:
                &nbsp;
                {quizAnswers['answer_b']}
            </div>
            <div className={Styles.card__question} onClick={() => handleClick(2)}>
                C:
                &nbsp;
                {quizAnswers['answer_c']}
            </div>
            <div className={Styles.card__question} onClick={() => handleClick(3)}>
                D:
                &nbsp;
                {quizAnswers['answer_d']}
            </div>
        </div>
    );
};

export default QuizCard;