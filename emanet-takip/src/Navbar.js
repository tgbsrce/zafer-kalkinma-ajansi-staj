import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="jumbotrom p-3 p-md-5 text-white bg-dark" style={{backgroundImage: `url(${process.env.PUBLIC_URL+'/img/purple.jpg'})`}}>
          <div className="container text-center">
          <img src="/img/logo-corporate-21.png"  width={500} alt="zafer-logo" className=""></img>
          </div>         
        </div>
      </>
    );
  }
}
