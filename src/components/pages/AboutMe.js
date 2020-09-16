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
                New to programming and currently enrolled in a coding bootcamp hoping to increase my knowledge of full-stack programming. 
              </h4>
              
            </p>
          </div>
            </div>
        )
      }
    }
    
    export default AboutMe;

