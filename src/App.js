import About from "./components/About";
import Blogs from "./components/Blogs";
import Technologies from "./components/Technologies";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <About /> */}
      <Technologies />
      <Projects />
      <Blogs />
    </div>
  );
}

export default App;
