import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <header>
      <h1>Dunder Mifflin </h1>
      <div id="navigation">
        <Link to="/last">Last week</Link>
        <Link to="/current">Current week</Link>
        <Link to="/next">Next week</Link>
      </div>
    </header>
  );
}
