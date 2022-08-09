import React from 'react';

const QuestionBox = ({question}) => {
    return(
        <div id='question-box'>
            <h1>{question.question}</h1>
        </div>
    )
};

export default QuestionBox;