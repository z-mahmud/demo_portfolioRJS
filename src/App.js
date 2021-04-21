import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Home></Home>
    </div>
  );
}

export default App;
