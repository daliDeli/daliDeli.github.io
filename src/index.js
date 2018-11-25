import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import SchedulingSystem from './containers/SchedulingSystem';
import './index.css';

const App = () => {
  return (
    <div>
      <Route path="/:redirect" component={Header} />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/:redirect" component={SchedulingSystem} />
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);
