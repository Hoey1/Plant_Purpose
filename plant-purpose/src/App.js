import React from "react";
import "./App.css";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { Navbar } from "./Navbar/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  );
}

export default App;
