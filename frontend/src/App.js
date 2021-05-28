import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BlogList from "./components/BlogList/BlogList";
import LoginRegister from "./components/LoginRegister/LoginRegister";

function App() {
  return (
    <div className="App">
      <Navbar />

    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route path="/login">
            <LoginRegister act="Login" />
          </Route>
          <Route path="/register">
            <LoginRegister act="Register" />
          </Route>
        </Switch>
      </BrowserRouter>
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
