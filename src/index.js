import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/Routes';
import { RecoilRoot } from 'recoil';
import './assets/root_css/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from '././assets/production/serviceWorker';


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <RecoilRoot> 
            <App />
          </RecoilRoot>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
