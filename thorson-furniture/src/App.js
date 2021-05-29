import React from "react"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import ContactMe from "./components/ContactMe"
function App() {
  return (
    <div className="App">
      <Home/>
      <Projects />
      <About />
      <ContactMe/>
    </div>
  );
}

export default App;
