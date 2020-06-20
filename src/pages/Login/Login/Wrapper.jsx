import React from 'react';

export const Wrapper = (props) => {
    return ( 
        <React.Fragment>
            <div className="login-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-4">
                            <div style={{marginTop: "150px"}}>
                                {props.children}
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
