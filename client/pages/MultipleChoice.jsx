import React from 'react';
import QuestionBox from '../components/QuestionBox.jsx';
import {useNavigate} from 'react-router-dom'

const MultipleChoice = ({ score, setScore, stage, setStage, question, setQuestion }) => {
    let navigate = useNavigate();
    let answer;
    let pressedBtn;
    const handleMCAnswer = (e) => {
        // update answer and pressedBtn to be pressed btn
        pressedBtn = e.target;
        answer = pressedBtn.innerHTML;
        // loop through btns and reset colors
        const btns = document.getElementsByClassName('answer-btn');
        for(let i = 0; i < btns.length; i++){
            btns[i].style.backgroundColor = "rgb(156, 13, 13)"
            btns[i].style.color = "rgb(218, 165, 32)"
        }
        // update bg color of pressed btn
        pressedBtn.style.backgroundColor = "rgb(218, 165, 32)";
        pressedBtn.style.color = "rgb(156, 13, 13)"
        // enable the submit btn
        // document.getElementsByClassName('submit-btn')[0].disabled = false;
    }

    const handleSubmit = (e) => {
        // if correct route to opt-out page, change btn color to green, incr score and stage
        console.log('answer', answer)
        console.log('Q - answer', question.correct)
        if(answer === question.correct){
            setTimeout(navigate('/opt-out'), 2000);    
            pressedBtn.style.backgroundColor = "#00FF00";
            setScore(score + 1);
            setStage(stage + 1);
        } 
        // else route to game-over page and change btn color to red
        else{
            setScore(0);
            setTimeout(navigate('/game-over'), 2000);
            pressedBtn.style.backgroundColor = "#0000";
        }
    }

    return(
        <div id='mc-question-container'>
            <h1 className='quest-num'>Question: {stage}</h1>
            <QuestionBox question={question}/>
            <div className='mc-question-answers'>
                <button id='btn-a' key='btn-a' className='answer-btn' onClick={handleMCAnswer}>{question.a}</button>
                <button id='btn-b' key='btn-b' className='answer-btn' onClick={handleMCAnswer}>{question.b}</button>
                <button id='btn-c' key='btn-c' className='answer-btn' onClick={handleMCAnswer}>{question.c}</button>
                <button id='btn-d' key='btn-d' className='answer-btn' onClick={handleMCAnswer}>{question.d}</button>
                {/* <button id='btn-a' className='answer-btn' onClick={handleMCAnswer}>ANSWER A</button>
                <button id='btn-b' className='answer-btn' onClick={handleMCAnswer}>ANSWER B</button>
                <button id='btn-c' className='answer-btn' onClick={handleMCAnswer}>ANSWER C</button>
                <button id='btn-d' className='answer-btn' onClick={handleMCAnswer}>ANSWER D</button>  */}
            </div>
            <button onClick={handleSubmit} className='submit-btn'>Submit Answer</button>
        </div>
    )
};

export default MultipleChoice;