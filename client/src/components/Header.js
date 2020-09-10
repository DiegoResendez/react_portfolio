import React from "react"
import "./style.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/ContactMe";

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return (
          <Router>
            <div className="headerLinks" >
<nav class="navbar navbar-expand-lg p-0">
    <div class="container">
      <div class="col-md-4 col-sm-12">
        <h1 className="myName">Diego Resendez</h1>
      </div>
      <div class="col-md col-sm-12"></div>
      <div class="col-md-5 col-sm-12 text-center" id="navbarSupportedContent">
        <ul class="nav">
          <li class="nav-item">
            <Link class="nav-link active" to="/aboutMe">About Me</Link>
          </li>
          <li class="nav-item">|</li>
          <li class="nav-item">
            <Link class="nav-link" to="/portfolio">Portfolio</Link>
          </li>
          <li class="nav-item">|</li>
          <li class="nav-item">
            <Link class="nav-link" to="/resume">Resume</Link>
          </li>
          <li class="nav-item">|</li>
          <li class="nav-item">
            <Link class="nav-link" to="/contactMe">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
{/* A <Switch> looks through its children <Route>s and
renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/aboutMe">
            <AboutMe/>
          </Route>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="/contactMe">
            <Contact/>
          </Route>
        </Switch>


</div>
</Router>
)};
};

export default Header;
