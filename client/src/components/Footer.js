import React from "react"
import "./style.css"

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        return (
            <div className="footerLinks" >
                {/* <h1> This is the Header </h1> */}
                <div class="container">
                    <div class="col-md-5 col-sm-12 text-center" id="navbarSupportedContent">
                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link active" href="https://github.com/DiegoResendez">Github Link</a>
                            </li>
                            <li class="nav-item">|</li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.linkedin.com/in/diegoresendez/">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
export default Footer;




        //   <li class="nav-item">|</li>
        //   <li class="nav-item">
        //     <a class="nav-link" href="#">Contact</a>
        //   </li>
        //   <li class="nav-item">|</li>
        //   <li class="nav-item">
        //     <a class="nav-link" href="#">Resume</a>
        //   </li>