import React, { setState, useState } from 'react';
import CodeEditor from '../components/CodeEditor.jsx';
import QuestionBox from '../components/QuestionBox.jsx';

const Algo = ({ score, setScore, stage, setStage, question, setQuestion }) => {
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

    return(
        <div>
            <h1>Question: {stage}</h1>
            <QuestionBox question={question}/>
            <div id="code-editor-container">
                <CodeEditor code={code} onChange={onChange}/>
            </div>
        </div>
    )
};

export default Algo;