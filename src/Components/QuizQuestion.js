import React from 'react';

function QuizQuestion({question,Index,optionSelectionHandler}) {
    const displayOptions=(options)=>{
        
        return(
            <div >
                {
                
                    options.map((items)=>{
                        return(
                            <div className="container">
                                
                            <button onClick={(e)=>{
                                let i=Index;
                                  optionSelectionHandler(e,i)
                            }} className="row btn btn-primary" value={items}>
                                {items}
                            </button>
                            </div>
                            
                        )
                    })
                }
            </div>
        )

    }
    return (
        <div className="container quiz-question">
            <h1 className="row">{question.Question}</h1>
            <div className="row">
                {
                    
                    displayOptions(question.Options)
                }
            </div>
            
        </div>
    );
}

export default React.memo(QuizQuestion);