import React from 'react';
import QuestionBox from '../components/QuestionBox.jsx';
import {useNavigate} from 'react-router-dom'

const MultipleChoice = ({ score, setScore, stage, setStage, question, setQuestion }) => {
    let navigate = useNavigate();
    let answer;
    const handleMCAnswer = (e) => {
        answer = e.target.value;
    }

    const handleSubmit = (e) => {
        if(answer === question.answer){
            navigate('/opt-out');    
        }else{
            navigate('/game-over');
        }
    }

    return(
        <div id='mc-question-container'>
            {/* <h1>Question: {stage}</h1>
            <QuestionBox question={question}/>
            <div id='mc-question-answers'>
                <button onClick={handleMCAnswer}>{question.answerA}</button>
                <button onClick={handleMCAnswer}>{question.answerB}</button>
                <button onClick={handleMCAnswer}>{question.answerC}</button>
                <button onClick={handleMCAnswer}>{question.answerD}</button>
            <div/>
            <button onClick={handleSubmit}>Submit Answer</button>
            <Link to={route}><button>Continue</button></Link>
        </div> */}
        </div>
    )
};

export default MultipleChoice;