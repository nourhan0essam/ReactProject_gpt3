import React from 'react';
import "./Feature.css";

const Feature = ({ title, text,className }) => {
    return (
      <div className={className}>
        <div className="gpt3__feature-container__feature-title">
          <div />
          <h1>{title}</h1>
        </div>
        <div className="gpt3__feature-container__feature-text">
          <p>{text}</p>
        </div>
      </div>
    );
}

export default Feature;
