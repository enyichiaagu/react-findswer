import React from 'react';

export const Wrapper = (props) => {
    return ( 
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-md-4">
                        {props.children}
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
