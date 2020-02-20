import React,{useEffect,useState} from 'react';
import Data from '../Data' 
import {useParams} from 'react-router-dom';
import StartButton from '../Components/StartButton'
import QuizQuestion from '../Components/QuizQuestion';
function QuizQuestionPage(props) {
    const [data,setData]=useState([]);
    const [Index,setIndex]=useState(0);
    const [loading,setLoading]=useState(true);
    const [start,setStart]=useState(false);
    const [intervalid,setIntervalid]=useState();
    const [counterid,setCounterId]=useState();
    const [count,setCount]=useState(0);
    const [score,setScore]=useState(0);
    const [answered,setAnswered]=useState(false);
    

    
    const optionSelectionHandler=(e,index)=>{
        if(answered)
        return;
        else{
            console.log(quizData);
        if(e.target.value===quizData[index].correctOption){
            setScore(prevState=>prevState+1);
            setAnswered(true);
            console.log("here")

        }
        else{

            setAnswered(true);
        }
    }
 
    }


    
    let params=useParams();
    //use effect to be called
    useEffect(()=>{
     setData(Data());   
     setLoading(false) 
     return ()=>{
         console.log("component unmounting codes")
     }
    },[])
    //getting the data from the local source
    const getData=(id)=>{
        return data.filter((items)=>{
            return items;
        })
    }
    //Changing the index
    const changeIndex=()=>{
        setIndex(prevState=>prevState+1);
        setAnswered(false);
    }
    //Function for handle starter
    const handleStart=()=>{
        let i=0;
        setStart(true);
        setCounterId(setInterval(()=>
        {
            if(i===5){
                i=0;
                setCount(0);
            }
            else{
                setCount(prevState=>prevState+1);
                i++;
            }
        },1000));
        setIntervalid(setInterval(changeIndex,6000));
    }    
    //Function clearing the intervals
    const clearingInterval=()=>{
        clearInterval(intervalid);
        clearInterval(counterid);
        
    }   
    //Score Display function
    const displayScore= (score) => {
        if(score<3){
            return(
                <div className="alert alert-danger">
                   <h1>Your score is not satisfying</h1>
                </div>
            )
        }
        else{
            return(
                <div className="alert alert-success">
                   <h1>Your score is satisfying</h1>
                </div>
            )
        }
    }
   
    
    
    let quizData=getData(params.id); 
  
    return (
        <div>
            {
                !start ?
                <StartButton handleStart={handleStart} /> :
                loading?
                <h1>loading</h1>:
                <div>
                {
                    Index<5?
                    <div className="question-page">
                        
                    <h1 style={{textAlign:'center'}}>{count}</h1>    
                    <QuizQuestion optionSelectionHandler={optionSelectionHandler} Index={Index} question={quizData[Index]} />
                    </div>
                    :<p>
                    {displayScore(score)}   
                    {clearingInterval()}
                    </p>
                }
                </div>
            }
           
        </div>
    );
}

export default QuizQuestionPage;