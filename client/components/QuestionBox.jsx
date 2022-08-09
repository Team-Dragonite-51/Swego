import React from 'react';

const QuestionBox = (props) => {
    return(
        <div id='question-box'>
            <h1>{props.question}</h1>
        </div>
    )
};

export default QuestionBox;