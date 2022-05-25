import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App(): React.ReactElement {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
