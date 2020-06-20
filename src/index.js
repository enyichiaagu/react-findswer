import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/Routes';
import './assets/root_css/index.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <Router>
            <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


//import * as serviceWorker from '././assets/production/serviceWorker';
// serviceWorker.register();
