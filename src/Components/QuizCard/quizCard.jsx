import React from 'react';
import Styles from './quizCard.module.css';

const QuizCard = ({ quizAnswers }) => {
    return (
        <div className={Styles.card}>
            <div className={Styles.card__question}>
                A:
                &nbsp;
                {quizAnswers['answer_a']}
            </div>
            <div className={Styles.card__question}>
                B:
                &nbsp;
                {quizAnswers['answer_b']}
            </div>
            <div className={Styles.card__question}>
                C:
                &nbsp;
                {quizAnswers['answer_c']}
            </div>
            <div className={Styles.card__question}>
                D:
                &nbsp;
                {quizAnswers['answer_d']}
            </div>
        </div>
    );
};

export default QuizCard;