import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

class Project extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="portfolioCard">
                <div className="card-columns">
                    <div className="card" >
                    <img src={ this.props.img } alt="Placeholder" class="img-thumbnail"></img>
                    <h1>{ this.props.title }</h1>
                        <p className="card-text"> </p>
                    <Link href={ this.props.href } className="btn btn-secondary outline-dark w-100"> { this.props.title } </Link>
                <p> {this.props.description} </p>
                </div>
                </div>
                </div>
        )
    }
}

export default Project;
