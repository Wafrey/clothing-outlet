import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from './../../components/form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { auth, signInWithGoogle } from './../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});

        }catch(err){
            console.log(err);
        }
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
                    
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>        
                </form>
            </div>
        )
    }
}

export default SignIn;