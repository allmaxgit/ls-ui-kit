import React from 'react';
import './style.less';

const TimelineCircle = props => (
  <div className="circle-list">
    <div className="circle-container">
    <div className="circle" />
    <div className="title">{props}</div>
    </div>
    <div className="line-container">
      <div className="line" />
    </div>
  </div>
);

export default TimelineCircle;
