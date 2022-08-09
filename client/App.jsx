import React from 'react';
import {
    Routes,
    Route,
    Link
} from 'react-router-dom'

export default function App() {
    // function getReq(){
    //     fetch ('http://localhost:3000/test')
    //      .then (res=> res.json())
    //      .then (res => console.log(res))
    // }
    return(
        <div>
            <Routes>
                <Route path='/login' element={<Login props={props}/>}></Route>
            </Routes>
        </div>
    )
}