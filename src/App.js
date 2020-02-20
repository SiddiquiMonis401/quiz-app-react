import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header'
import QuizBadge from './Components/QuizBadge'
import QuizQuestionPage from './Pages/QuizQuestionPage'

function App() {
  return (
    <div className="container-fluid App" >
    <Header />
     
    <div className="badge-container">
    <Switch>

    <Route exact path="/">
      <div className="container-fluid">
        <div className="row">
          <div className=" col-lg-4 col-lg-4-offset-2 badge"><QuizBadge title="c#" info="Click On the link below to start the quiz" /></div>
          <div className=" col-lg-4 col-lg-4-offset-2 badge"><QuizBadge title="c#" info="Click On the link below to start the quiz" /></div>
          <div className=" col-lg-4 col-lg-4-offset-2 badge"><QuizBadge title="c#" info="Click On the link below to start the quiz" /></div>
          <div className=" col-lg-4 col-lg-4-offset-2 badge"><QuizBadge title="c#" info="Click On the link below to start the quiz" /></div>
          <div className=" col-lg-4 col-lg-4-offset-2 badge"><QuizBadge title="c#" info="Click On the link below to start the quiz" /></div>
          <div className=" col-lg-4 col-lg-4-offset-2 badge"><QuizBadge title="c#" info="Click On the link below to start the quiz" /></div>
          <div className=" col-lg-4 col-lg-4-offset-2 badge"><QuizBadge title="c#" info="Click On the link below to start the quiz" /></div>
          <div className=" col-lg-4 col-lg-4-offset-2 badge"><QuizBadge title="c#" info="Click On the link below to start the quiz" /></div>
         </div> 
         
     </div> 
    </Route> 
    <Route exact path="/quizQuestionPage/:id" >
      <QuizQuestionPage />
      
    </Route>
    </Switch>
    </div>

    </div>
  );
}

export default App;
