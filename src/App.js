import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import React, { Component } from "react";
import Tea from "./components/Tea";
import Parent from "./components/ParentComponent";

function App() {
  return (
    <>
      <Parent />
    </>
  );
}

export default App;
