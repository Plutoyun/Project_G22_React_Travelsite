import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import QuickChoose from "./QuickChoose/QuickChoose";
import PlanView from "./PlanView/PlanView";
import Side from "./Side/SideView";
import Payment from "./Payment/Payment";
import DetailView from "./Details/DetailView";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
         
        </header>
     

      {/* Router */}
      <Route exact path = "/quickchoose" component={QuickChoose} />
      {/* <Route exact path = "/" component={Payment} /> */}
      {/* <Route exact path = "/" component={Side} /> */}
      <Route exact path = "/" component={PlanView} /> 
      
      {/* <Route exact path = "/" component={DetailView} />  */}
      </div>
    );
  }
}

export default App;
