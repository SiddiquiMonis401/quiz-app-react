import React,{useState} from 'react';

function QuizQuestions({index,question,options}) {
    const [isOptionSelected,setIsOptionSelected]=useState(false);
    const changeHandler= (events) => {
        if(isOptionSelected)
        return;
        else{
            console.log(events.target.name,events.target.id,isOptionSelected);
               setIsOptionSelected((prevstate=>!prevstate));
        }
    }
    const displayFunction = () => {
        return options.map((items)=>{
            return(
            <button className="options-button" onClick={(e)=>changeHandler(e)}  id={index} name={items} >{items}</button>)
        })
    }
    return (
        <div className="question-container">
            <h4>Question No.{index+1}</h4>
            <p>{question}</p>
            <div className="options-container">{displayFunction()}</div>
            
        </div>
    );
}

export default QuizQuestions;