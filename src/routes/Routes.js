import React, { Suspense, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { GlobalLoader } from './../state/Recoil';

//Components
import LinearProgress from '@material-ui/core/LinearProgress';
const Login = React.lazy(() => import('./../pages/Login/Login'));

function App() {
    const [loader, ] = useRecoilState(GlobalLoader);
    return (
        <div>
            { loader 
                 ? <LinearProgress style={{backgroundColor: "#3399ff", transition: "all 0.5s"}}/>
                 : <LinearProgress style={{backgroundColor: "#15202b"}} color="transparent"/> }
            <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                    <Route path="/" component={Login} />
                    <Route path="/sign-up" />
                </Switch>
            </Suspense>
        </div>
    )
}

export default App;
