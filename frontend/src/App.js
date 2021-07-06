import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BlogList from "./components/BlogList/BlogList";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import Loading from "./components/LoadingComponent/LoadingComponent"
import { useAuth } from './contexts/auth-context';
import check_authenticated from './axios_utils/check_logged';
import { useEffect, useState } from 'react';

function App() {

  const { isLogged, setIsLogged } = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  const authenticated = () => {
    check_authenticated()
      .then(res => {
        if (res.isAuthenticated === true) { setIsLogged(true) }
        setIsLoading(false)
      })
  }

  useEffect(() => {
    authenticated()
  }, [])


  return (
    <div className="App">
      {
        isLoading ?
          <Loading />
          :
          < BrowserRouter >
            <Navbar />

            <main>
              <Switch>

                <Route exact path="/" component={BlogList} />

                <Route exact path="/login">
                  <LoginRegister act="Login" />
                </Route>

                <Route exact path="/register">
                  <LoginRegister act="Register" />
                </Route>

              </Switch>
            </main>
          </BrowserRouter >
      }
      <footer>
        <p>© 2021 Piccolo</p>&nbsp;&nbsp;&nbsp;
        <p>Credits</p>&nbsp;&nbsp;
        <p>About</p>
      </footer>
    </div>
  )
}

export default App;
