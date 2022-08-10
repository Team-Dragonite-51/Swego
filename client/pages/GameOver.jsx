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
            <h1 className='start-title'> Game Over</h1>
            <h2 className='subtext'>Your Final Score Was: {score} </h2>
            <button className="over-btn" onClick={handleClick}>Play Again?</button>
        </div>
    )
};

export default GameOver;