import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export default function() {
  return (
    <main>
      <img
        src="http://www.marketingmag.ca/wp-content/uploads/2013/04/Dunder-Mifflin.jpg"
        alt="Dunder Mifflin"
        id="welcome-img"
      />
      <NavLink to="/current" id="welcome-link">
        Enter
      </NavLink>
    </main>
  );
}
