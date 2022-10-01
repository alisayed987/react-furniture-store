import React, { Component } from "react";
import "./css/Body.css";

class Body extends Component {
  render() {
    return (
      <>
        {this.props.top}
        <div className="body-container">
          <div className="body-fixed">{this.props.children}</div>
        </div>
      </>
    );
  }
}

export default Body;
