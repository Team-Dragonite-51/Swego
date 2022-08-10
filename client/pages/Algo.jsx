import React, { setState, useState } from 'react';
import CodeEditor from '../components/CodeEditor.jsx';
import QuestionBox from '../components/QuestionBox.jsx';
import {useNavigate} from 'react-router-dom';

const Algo = ({ score, setScore, stage, setStage, question, setQuestion }) => {
    let navigate = useNavigate();
    const [code, setCode] = useState('');

    const onChange = (action, data) => {
        switch (action) {
            case "code": {
                setCode(data)
                break;
            }
            default: {
                console.warn("Case not handled", action, data)
            }
        }
    }

    const handleSubmit = (e) => {
        setTimeout(navigate('/game-over'), 2000);
    }

    return(
        <div>
            <h1 className='quest-num'>Question: {stage}</h1>
            <QuestionBox question={question}/>
            <div id="code-editor-container">
                <CodeEditor code={code} onChange={onChange}/>
            </div>
            <button onClick={handleSubmit} className='submit-btn'>Submit Answer</button>
        </div>
    )
};

export default Algo;