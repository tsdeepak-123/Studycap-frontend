import React from 'react';
import './States.css'; // Importing CSS file for styling

function States() {
  return (
    <div className="states-container">
      <h2 className="title">Service Areas</h2>
      <div className="card-container">
        <div className="state-card">
          <h3>Kerala</h3>
        </div>
        <div className="state-card">
          <h3>Karnataka</h3>
        </div>
        <div className="state-card">
          <h3>Tamilnadu</h3>
        </div>
        <div className="state-card">
          <h3>Andrapradesh</h3>
        </div>
      </div>
      <p className="more-info">However, we also serve clients in other regions. Please contact us for more information.</p>
    </div>
  );
}

export default States;
