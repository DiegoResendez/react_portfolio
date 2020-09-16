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
                <div class="container">
                        <div class="footer">
                            <a class="footer-link active" href="https://github.com/DiegoResendez">Github</a>
                            <br></br>
                            |
                            <br></br>
                            <a class="footer-link" href="https://www.linkedin.com/in/diegoresendez/">LinkedIn</a>
                        </div>
                </div>

            </div>
        )
    }
}
export default Footer;
