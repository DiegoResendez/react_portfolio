import React from "react";

class Resume extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="Resume">
                <h1>Resume</h1>
                <div className="col-md-9 resumeText" id="resumeText">

                </div>
            </div>
        )
      }
    }
    
    export default Resume;