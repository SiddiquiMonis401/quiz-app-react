import React from 'react';

function StartButton(props) {
    return (
        <div className="start-quiz container">
            <p>In this quiz you will have only five seconds to asnwer each question,So be careful and dont waste you time</p>
            <button className="btn btn-danger" onClick={props.handleStart}>
                start-quiz
            </button>
        </div>
    );
}

export default StartButton;