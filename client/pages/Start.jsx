import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Start = ({ question, setQuestion }) => {

    // when user clicks start, fetch first question from the db
    const handleStart = (e) => {
        async function fetchData () {
            try{
                // await fetch from db
                let res = await fetch('/getMCQuestion', {
                    method: 'GET',
                    headers: {},
                })
                // await json of res
                const data = await res.json();
                return data;
            }
            catch(err){
                console.log(err)
            }
        }
        // update question to be fetched question
        fetchData().then(data => setQuestion(data))
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
            <h1 id='start-title'>Welcome to SWEGO</h1>
            <div>
                <Link to='/question-mc'><button onClick={handleStart}>Start New Game</button></Link>
            </div>
        </div>
    )
}

export default Start;