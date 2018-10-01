import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import CakeList from "./components/Cakes/CakeList";
import NavMenu from "./components/Layout/NavMenu";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavMenu />
          <CakeList />
        </div>
      </Router>
    );
  }
}

export default App;
