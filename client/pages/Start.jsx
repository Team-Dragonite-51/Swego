import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const Start = ({ question, setQuestion, getQuestion }) => {
    let navigate = useNavigate();
    // when user clicks start, fetch first question from the db
    const handleStart = (e) => {
        // // Previous functionality to get a question
        // async function fetchData () {
        //     try{
        //         // await fetch from db
        //         let res = await fetch('/getMCQuestion', {
        //             method: 'GET',
        //             headers: {},
        //         })
        //         // await json of res
        //         const data = await res.json();
        //         return data;
        //     }
        //     catch(err){
        //         console.log(err)
        //     }
        // }

        // new function passed down as a prop from App to get a question
        getQuestion(0).then(data => {
            console.log("data in start:", data);
            setQuestion(data)
        }).then(() => navigate('/question-mc'));
        // OLD
        // update question to be fetched question
        // fetchData().then(data => setQuestion(data))
    }

    const testFunc = () => {
        fetch('http://localhost:3000/test')
    }

    // // use effect to update the question from the db on mount
    // useEffect(() => {
    //     // need to make the fetchData function async to ensure we complete the get request before executing other code
    //     async function fetchData () {
    //         try{
    //             let res = await fetch('/getMCQuestion')
    //             const data = await res.json();
    //             return data;
    //         }
    //         catch(err){
    //             console.log(err)
    //         }
    //     }
    //     // update question to be fetched question
    //     fetchData().then(data => setQuestion(data))
    // }, []);

    return(
        <div id='start-page'>
            <h1 className='start-title'>Welcome to SWEGO</h1>
            <div>
                {/* <Link to='/question-mc'> */}
                    <button onClick={handleStart} className="start-btn">Start New Game</button>
                    {/* </Link> */}
                    {/* <button onClick={testFunc}>TEST</button> */}
            </div>
        </div>
    )
}

export default Start;