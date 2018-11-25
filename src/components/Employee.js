import React from 'react';

export default props => {
  return (
    <div>
      <h3>{props.employeeName}</h3>
      <img src={props.avatar} alt="Employee" />
    </div>
  );
};
