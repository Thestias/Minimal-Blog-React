import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BlogList from "./components/BlogList/BlogList";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <BlogList />
      </main>

      <footer>
        <p>© 2021 Piccolo</p>&nbsp;&nbsp;&nbsp;
        <p>Credits</p>&nbsp;&nbsp;
        <p>About</p>
      </footer>
    </div>
  );
}

export default App;
