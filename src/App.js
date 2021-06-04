import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    // Bem class naming
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />

      {/* lower swipe buttons */}
    </div>
  );
}

export default App;
