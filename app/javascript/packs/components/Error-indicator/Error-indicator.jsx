import React from 'react';

import './Error-indicator.css';
import icon from './Gear-1s-50px.gif';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">О-опс!</span>
      <span>
        Что-то пошло не так
      </span>
      <span>
        (Скоро все исправим)
      </span>
    </div>
  );
};

export default ErrorIndicator;
