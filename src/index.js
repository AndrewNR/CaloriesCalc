import React from "react";
import ReactDOM from "react-dom";
import FitForm from "./FitForm";

import "bootstrap/dist/css/bootstrap.min.css";
import "./roboto-font-google.css";
import "./styles.css";

function App() {
  return (
    <div className="App py-2 bg-dark">
      <FitForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
