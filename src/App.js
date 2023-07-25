import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Francisco" />
        <footer>
          <a
            href="https://github.com/jleewest/weather-app-react-project"
            target="_blank"
            rel="noopener noreferrer"
            className="code-link"
          >
            Open source code
          </a>{" "}
          by Jenna Westendorf
        </footer>
      </div>
    </div>
  );
}

export default App;
