import React from "react";
import "./style.css"

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
                        <p className="card-text"> {this.props.description} </p>
                    <a href={ this.props.link } className="btn btn-secondary outline-danger w-100"> { this.props.title } </a>
                <p> {this.props.description} </p>
                <a src={ this.props.link }></a>
                </div>
                </div>
                </div>
        )
    }
}

export default Project;

// btn-outline-light