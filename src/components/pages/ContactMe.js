import React from "react";
import "./style.css";

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("Thank you for your email" + this.state.name);
      }
      myChangeHandler = (event) => {
        this.setState({name: event.target.value},
            {email:event.target.value},
            {subject:event.target.value},
            {message:event.target.value},
            );
      }



    render() {
        return (
            <div className="contactPage">
                <h1>Contact Me</h1>
                <form onSubmit={this.mySubmitHandler}>
      {/* <h1>Hello {this.state.name}</h1> */}
      {/* <p>Enter your name, and submit:</p> */}
    <input
        className="formList"
        type='text'
        name='name'
        placeholder='Name'
        onChange={this.myChangeHandler}
    />
    <input
        type='text'
        name='email'
        placeholder='Email'
        onChange={this.myChangeHandler}
    />
    <input
        type='text'
        name='subject'
        placeholder='Subject'
        onChange={this.myChangeHandler}
    />
    <form>
      <textarea value={this.state.message} />
      </form>
      <input
        type='submit'
      />
      </form>
                </div>
        )
    }
}

export default Contact;

