import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
