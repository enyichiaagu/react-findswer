import React from 'react'
import { Wrapper } from './Login/Wrapper';

function Login() {
    return (
        <Wrapper>
            <h1>Login page</h1>
            <div className="md-form">
                <input type="text" id="form1" className="form-control" />
                <label htmlFor="form1">Email or phone</label>
            </div>
            <button className="btn btn-block">Next 
            <i className="fas fa-arrow-right ml-1"></i>   
            </button>
            <button className="btn btn-outline-default btn-block mt-1">Sign up</button>

        </Wrapper>
    )
}

export default Login;
