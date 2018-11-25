import React from 'react';
import ReactDOM from 'react-dom';
import SchedulingSystem from './containers/SchedulingSystem';
import './index.css';

const App = () => {
  return (
    <div>
      <SchedulingSystem />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
