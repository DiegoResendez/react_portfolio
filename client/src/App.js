/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Portfolio from "./components/pages/portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/pages/contact";
import Resume from "./components/pages/resume";
import AboutMe from "./components/pages/aboutMe";



class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="reactPages" >
{/* Need to make these pages into routes */}
        <AboutMe/>

        <Portfolio/>

        {/* <Resume/> */}

        <Contact/>

        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
