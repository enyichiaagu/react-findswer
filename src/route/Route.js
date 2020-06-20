import React from 'react';
import {  Switch, Route as RoutePath } from 'react-router-dom';

import Login from '../pages/Login/Login';
const Route = () => {
    return ( 
        <React.Fragment>
            <Switch>
                <RoutePath exact path='/'  component={Home} />
                <RoutePath exact path='/login'component={Login} />
            </Switch>
        </React.Fragment>
     );
}
const Home = () => {
    return (  
        <React.Fragment>
            <div className="d-flex justify-content-center">
                <h1>Homepage</h1>
            </div>
        </React.Fragment>
     );
}
 
export default Route;