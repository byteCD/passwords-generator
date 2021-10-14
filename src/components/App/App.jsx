import React from "react";
import PasswordsGenerator from "../../components/PasswordsGenerator/PasswordsGenerator";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Генератор паролей</h1>
      <PasswordsGenerator />
    </div>
  );
};

export default App;
