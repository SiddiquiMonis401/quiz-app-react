import React from 'react';
import {Link} from 'react-router-dom'
function QuizBadge({title,info}) {
    return (
        <div className="quiz-badge">
            <h1>{title}...</h1>
            <p>{info}</p>
            <Link to={`quizQuestionPage/:${title}`}><button className="btn btn-primary">Take Quiz</button></Link>
        </div>
    );
}

export default QuizBadge;