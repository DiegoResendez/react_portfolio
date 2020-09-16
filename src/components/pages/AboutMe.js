import React from "react";

class AboutMe extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="aboutMe">
                <h1>About Me</h1>
                <div class="col-md-9 aboutMeText" id="aboutMeText">
            <p class="text">
              <h4>
                My name is Diego Resendez and here is my website portfolio.  I have been coding for less than a year and I recently finished the
                UW Coding Bootcamp.  This portfolio is my way of showcasing my abilities as a developer.
              </h4>
              
            </p>
          </div>
            </div>
        )
      }
    }
    
    export default AboutMe;

