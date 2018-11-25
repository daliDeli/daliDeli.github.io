import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <main>
      <img
        src="http://www.marketingmag.ca/wp-content/uploads/2013/04/Dunder-Mifflin.jpg"
        alt="Dunder Mifflin"
        id="welcome-img"
      />
      <Link to="/current" id="welcome-link">
        Enter
      </Link>
    </main>
  );
}
