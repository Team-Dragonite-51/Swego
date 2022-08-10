import React from 'react';

const QuestionBox = ({question}) => {
    return(
        <div id='question-box'>
            <h2>{question.question_text}</h2>
        </div>
    )
};

export default QuestionBox;