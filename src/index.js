import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, HashRouter} from 'react-router-dom';

import './assets/root_css/css/bootstrap.css';
import './assets/root_css/css/mdb.css';

ReactDOM.render(
  <React.StrictMode>
      <HashRouter basename="/">
          <App />
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


//import * as serviceWorker from '././assets/production/serviceWorker';
// serviceWorker.register();
