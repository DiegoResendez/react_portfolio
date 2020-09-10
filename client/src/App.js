/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Route } from 'react-router-dom';
import "./App.css";


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

      {/* <Route exact path="./components/pages/Portfolio" component={Portfolio} /> */}

        {/* <AboutMe/> */}
        {/* <Portfolio/>
        <Contact/>
        <Resume/> */}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
