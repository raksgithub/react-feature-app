import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

// Components
import Navbar from './components/Navbar';
import FeatureContainer from './components/FeatureContainer';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

function App() {
  return (
    <div>
      <Router history={createBrowserHistory()}>
        <Navbar />
        <Switch>
          {["/", "/two"].map((path, index) =>
            <Route path={path} component={FeatureContainer} key={index} />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
