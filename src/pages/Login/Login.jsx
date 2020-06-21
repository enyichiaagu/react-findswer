import React from 'react'
import { Wrapper } from './Login/Wrapper';

function Login() {
    return (
        <Wrapper>
            <h1>Login page</h1>

            <div className="md-form md-bg input-with-pre-icon">
                <i className="fas fa-user input-prefix"></i>
                <input type="text" id="prefixInside4" className="form-control" autoComplete="off"/>
                <label htmlFor="prefixInside4">Email or phone</label>
            </div>

            <button className="btn btn-block">Next 
            <i className="fas fa-arrow-right ml-1"></i>   
            </button>

            <button className="btn btn-outline-default btn-block mt-1">Sign up
            </button>

        </Wrapper>
    )
}

export default Login;
