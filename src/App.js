import React from 'react';
import Film from './components/films';
import Nav from './components/nav';
import LoginComponent from './components/login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Series from './components/series';
import MonFooter from './components/footer';
import Home from './components/home.js'

function Notfound(){
  return(
    <div>
      <h1>not found</h1>
    </div>
  )
};

function App() {
  return (
    <div className="App">
     <Router>
     <Nav/>
       <Switch>
         <Route exact path="/" component = {Home}/>
         <Route path = "/login" component = {LoginComponent}/>
         <Route exact path="/films" component= {Film}/>
         <Route exact path="/series" component= {Series}/> 
         <Route exact component = {Notfound}/>
       </Switch>
       <MonFooter/>
     </Router>
    </div>
  );
}

export default App;
