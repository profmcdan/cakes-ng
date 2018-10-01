import React, { Component } from "react";
import Cake from "./Cake";

class CakeList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Cake />
          </div>
          <div className="col-4">
            <Cake />
          </div>
          <div className="col-4">
            <Cake />
          </div>
        </div>
      </div>
    );
  }
}

export default CakeList;
