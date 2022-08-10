import React from 'react';
import QuestionBox from '../components/QuestionBox.jsx';
import { useNavigate } from 'react-router-dom';

const OptOut = ({ score, stage, question, setQuestion, getQuestion, userID, nextQuestion }) => {
    const navigate = useNavigate();

    function handleYes() {
        // redirect to game over
        navigate('/game-over');

    }

    function handleNo() {
        // stage already up to date
        // getting new question dependent on stage
        getQuestion(userID, nextQuestion).then(data => setQuestion(data));;
        console.log("question", question);
        console.log("stage:", stage);
        if (stage === 3 || stage === 7 || stage === 10) {
            navigate('/question-a');
        } else navigate('/question-mc')
    }

    return(
        <div>
            OptOut Page
            <h1>"Do you want to take your money and go?"</h1>
            <h3>Your Current Score: {score}</h3>
            <button onClick={handleYes}>YES</button>
            <button onClick={handleNo}>NO</button>
        </div>
    )
};

export default OptOut;