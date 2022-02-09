import React from "react";
import List from "./features/List/List";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App =() => {
  return (
    <div className="App">
      <header className="App-header">
        <List />
      </header>
    </div>
  );
}

export default App;
