import React from "react";
import "./welcome.css";

const Welcome = () => {
  return (
    <>
      <div className="welcome-container">
        <h1>Welcome to the Good Habits App</h1>
        <h4>
          Take control of your routine. Track your good habits and keep going!
        </h4>
        <button type="button" className="welcome-btn">
          Get Started!
        </button>
      </div>
    </>
  );
};

export default Welcome;
