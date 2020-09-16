/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Route } from 'react-router-dom';
import "./";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/ContactMe";
import Resume from "./components/pages/Resume";
import AboutMe from "./components/pages/AboutMe";



class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="reactPages" >
        {/* <AboutMe/> */}

        </div>
        <div className="AppFooter">
        <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
