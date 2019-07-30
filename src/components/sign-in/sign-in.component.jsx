import React, { Component } from 'react';
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    name="email" 
                    type="email" 
                    onChange={this.handleChange}
                    value={this.state.email} 
                    required></input>
                    <label>Email</label>
                    <input 
                    name="password" 
                    type="password" 
                    onChange={this.handleChange}
                    value={this.state.password} 
                    required></input>
                    <labe>Password</labe>

                    <input type="submit" value="Submit Form"></input>
                </form>
            </div>
        )
    }
}

export default SignIn;