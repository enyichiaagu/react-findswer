import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
const Login = React.lazy(() => import('./../pages/Login/Login'));

function App() {
    return (
        <div>
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
