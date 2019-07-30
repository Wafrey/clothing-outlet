import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from './../../components/form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { signInWithGoogle } from './../../firebase/firebase.utils';

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
                    <FormInput 
                    name="email" 
                    type="email" 
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    label='email'
                    required></FormInput>

                    <FormInput
                    name="password" 
                    type="password" 
                    handleChange={this.handleChange}
                    value={this.state.password} 
                    label='password'
                    required></FormInput> 
  
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Sign In with Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;