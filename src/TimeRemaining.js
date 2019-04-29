import React from 'react';
import end from "./end.gif";


function TimeRemaining({time, done}) {
    return (
        <div>
            {!done ? <h1>{time}</h1> : <img src={end} alt="times up"></img>}
        </div>
    )
}

export default TimeRemaining;
