import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export default function() {
  return (
    <header>
      <img
        src="https://www.logolynx.com/images/logolynx/46/465010f3ad5e715b06b0aac94d14d09f.png"
        alt="Dunder Mifflin logo"
        id="logo"
      />
      <nav>
        <NavLink to="/last" activeClassName="active">
          Last week
        </NavLink>
        <NavLink to="/current" activeClassName="active">
          Current week
        </NavLink>
        <NavLink to="/next" activeClassName="active">
          Next week
        </NavLink>
      </nav>
    </header>
  );
}
