import React from "react"
import "./style.css"
// import { Nav } from "bootstrap"



class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }


    render() {
        return (
            <div className="headerLinks" >
                {/* <h1> This is the Header </h1> */}
<nav class="navbar navbar-expand-lg p-0">
    <div class="container">
      <div class="col-md-4 col-sm-12">
      </div>
      <div class="col-md col-sm-12"></div>
      <div class="col-md-5 col-sm-12 text-center" id="navbarSupportedContent">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">About</a>
          </li>
          <li class="nav-item">|</li>
          <li class="nav-item">
            <a class="nav-link" href="#">Portfolio</a>
          </li>
          <li class="nav-item">|</li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">|</li>
          <li class="nav-item">
            <a class="nav-link" href="#">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

            </div>
        )
    }
}
export default Header;


//     <h1>{ this.props.title }</h1>
//     <p> {this.props.description} </p>
// <a src={ this.props.link }></a>


//             <Nav variant="pills" defaultActiveKey="/home">
//   <Nav.Item>
//     <Nav.Link href="/home">About Me</Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link eventKey="link-1">Portfolio</Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link eventKey="/resume">Resume</Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link eventKey="contact">Contact</Nav.Link>
//   </Nav.Item>
// </Nav>