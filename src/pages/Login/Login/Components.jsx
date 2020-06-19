import React from 'react';
import buttonStyle from './../../../assets/modules/button.module.css';
export const BUTTONnext = ({ handler, txtLabel: label, loader }) => {
    return ( 
        <React.Fragment>
            <button 
                onClick={handler}
                type="button" 
                className="btn btn-primary btn-block rounded-pill">{label}
                <i className="fas fa-arrow-right ml-2"></i>
            </button> 
        </React.Fragment>
     );
}
export const BUTTONprev = ({ handler }) => {
    return ( 
        <React.Fragment>
            <button 
                onClick={handler}
                type="button" 
                className="btn btn-primary btn-block waves-effect rounded-pill">Prev
                <i className="fas fa-arrow-left ml-2"></i>
            </button> 
        </React.Fragment>
     );
}
export const BUTTONenter = ({ handler }) => {
    return ( 
        <React.Fragment>
            <button 
                onClick={handler}
                type="button" 
                className="btn btn-primary btn-block waves-effect rounded-pill">Enter
            </button> 
        </React.Fragment>
     );
}
export const BUTTONsignup = ({ handler }) => {
    return ( 
        <React.Fragment>
            <button 
                onClick={handler}
                type="button" 
                className="btn btn-outline-primary btn-block waves-effect rounded-pill mt-2">Sign up
            </button> 
        </React.Fragment>
     );
}
export const INPUTusername = ( { 
        inputReference: register,
        style: txtInput
        }) => {
        return ( 
            <React.Fragment>                        
                <i className="fas fa-user input-prefix" style={txtInput} />
                <input 
                    ref={register}
                    name="username"
                    type="text" 
                    id="username" 
                    className="form-control"
                    autoComplete="off" />   
                <label htmlFor="username" style={txtInput}>Username or Phone</label>
            </React.Fragment>
        );
}
export const INPUTpassword = ( { 
        handler: prev,
        inputReference: register,
        style: txtInput
        }) => {
        return ( 
            <React.Fragment>
                <div 
                onClick={prev}
                className={`${buttonStyle.btnGoBack} , d-flex position-absolute`}>
                    <i className="fas fa-arrow-left mr-2" style={{ marginTop:"-25px"}} /> 
                    <span style={{marginTop:"-30px"}}>Go back</span>
                </div>

                <i className="fas fa-key input-prefix" style={txtInput} />
                <div>
                    <input 
                        ref={register}
                        name="password"
                        type="text" 
                        id="password" 
                        className="form-control"
                        autoComplete="off" />
                    <label htmlFor="password" style={txtInput}>Password</label>
                </div>
            </React.Fragment>
        );
}
export const INPUTcheckbox = ({
    style: subInput,
    label
    }) => {
    return ( 
        <React.Fragment>
            <div className="custom-control custom-checkbox" style={subInput}>
                <input 
                    type="checkbox" 
                    className="custom-control-input" 
                    id="defaultChecked2" defaultChecked />
                <label 
                    className="custom-control-label" 
                    htmlFor="defaultChecked2" 
                    style={label}>Remember login</label>
            </div>
        </React.Fragment>
    );
}
export const FORGOTpassword = ({ style: subInput}) => {
    return ( 
        <React.Fragment>
            <div style={subInput}>
                <span>Forgot password?</span>
            </div>
        </React.Fragment>
     );
}
export const LOGINheader = () => {
    return ( 
        <React.Fragment>
            <div className="d-flex justify-content-center ">
                <div>                
                    <img srcSet="temp_header_2.png" alt="Login_header" style={{width: "350px"}}/>
                </div>
            </div>
            {/* <span>
                <h1 style={{color: "#ccc"}}>FIND<span className="font-weight-bold">SWER</span></h1>
                <h5 style={{color: "#ccc", marginTop: "-10px"}}> 
                    Knowledge is power,
                </h5>
                <h2 style={{color: "#ccc", marginTop: "-15px"}}>
                    obtain the power
                </h2>

            </span> */}


        </React.Fragment>
     );
}
 
 
 

 
 
