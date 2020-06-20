import React, { useEffect, useState } from 'react'
import { Wrapper } from './Login/Wrapper'
import { BUTTONnext, INPUTpassword,  INPUTusername, 
         INPUTcheckbox, FORGOTpassword, LOGINheader } from './Login/Components';
import { useForm } from 'react-hook-form';

    const txtInput = {
        color: "#ccc"
    }
    const txtInputPassword = {
        marginTop: ""
    }
    const subInput = {
        marginTop: "-10px",
        color: "#ccc"
    }
    const label = {
        color: "#ccc"
    }

function Login() {
    const { register } = useForm();
    const [next, setNext] = useState({
        loader: false,
        count: 0,
        label: ''
    });

    useEffect(() => {
        document.title = "Findswer Login"
        if(next.count === 0) {
            setNext(prev => ({
                ...prev,
                label: 'NEXT'
            }))
        }
    }, [next.count])

    const moveHandler = () => {
        if(next.count === 0) {
            // setNext(prev => ({...prev, loader: true }))
            setTimeout(() => {
                setNext(prev => ({
                    ...prev,
                    count: next.count + 1,
                    label: 'NEXT',
                    loader: false
                }))
            }, 1000)
        }
    }   
    const prevHandler = (data) => {
        if(next.count === 1) {
            setNext(prev => ({
                ...prev,
                count: next.count - 1
            }))
        }
    }
    
    return (
        <React.Fragment>
            <Wrapper>

                    <LOGINheader />
                    { next.count === 0 &&
                      <div className="md-form md-bg input-with-pre-icon">
                            <INPUTusername inputReference={register} style={txtInput} />
                      </div> }

                    {  next.count === 1 && 
                        <div className="md-form md-bg input-with-pre-icon" style={txtInputPassword}>
                            <INPUTpassword 
                                handler={prevHandler}
                                inputReference={register} 
                                style={txtInput} />
                        </div>}

                    <div className="login-option-wapper">
                        <div className="d-flex justify-content-between">
                            <INPUTcheckbox style={subInput} label={label}/>
                            <FORGOTpassword style={subInput}/>
                        </div>
                    </div>

                    <div className="mt-4">
                        <BUTTONnext handler={moveHandler} txtLabel={next.label} loader={next.loader}/>
                        {/* <BUTTONenter handler={handleSubmit(loginHandler)}/>
                        <BUTTONsignup handler={signupHandler}/> */}
                    </div>

                    <div className="text-center mt-3 mb-1">
                         <span style={{color: "#ccc", opacity: "0.4"}}>or sign in with
                         <i className="fas fa-sign-in-alt ml-2"></i>
                         </span>
                    </div>

                    <div className="d-flex justify-content-center"style={{fontSize: "34px"}}>
                        <i className="fab fa-facebook" style={{margin:"10px", color: "#336699"}}></i>
                        <i className="fab fa-google" style={{margin:"10px", color: "#ff3333"}}></i>
                        <i className="fab fa-twitter" style={{margin:"10px", color: "#3399ff"}}></i>
                    </div>
            </Wrapper>
        </React.Fragment>
    )
}

export default Login
