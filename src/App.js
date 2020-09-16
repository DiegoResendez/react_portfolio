import React, { Component }  from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from './components/pages/AboutMe';


class App extends React.Component {

render() {

    console.log("App should load")

    return(
        <div className="App">
        <Header/>
        <div className="reactPages">
        </div>

        <div className="AppFooter">
        <Footer/>
        </div>
        </div>
    )
}


}


export default App;

