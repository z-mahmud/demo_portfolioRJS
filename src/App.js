import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./containers/Home";
import ContactUS from "./containers/ContactUS";
import Post from "./containers/Post";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Hero></Hero>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contactus" component={ContactUS}></Route>
        <Route path="/post" component={Post}></Route>
      </Router>
    </div>
  );
}

export default App;
