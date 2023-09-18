import React from "react";
import "./index.css";
import Welcome from "./components/welcome/Welcome";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Welcome />
      </div>
    </>
  );
}

export default App;
