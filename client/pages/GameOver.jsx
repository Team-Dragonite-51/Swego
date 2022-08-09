import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameOver = ({ score, setScore, stage, setStage }) => {
    const navigate = useNavigate();
    function handleClick() {
        setScore(0);
        setStage(1);
        navigate('/start');
    }

    return(
        <div>
            GameOver Page
            <h1>Your Final Score Was: {score} </h1>
            <button onClick={handleClick}>Play Again?</button>
        </div>
    )
};

export default GameOver;