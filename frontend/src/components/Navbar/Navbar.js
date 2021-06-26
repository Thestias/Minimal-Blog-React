import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useAuth } from "../../contexts/auth-context";

function Navbar() {

  const { isLogged } = useAuth()

  const isAuthenticated = () => {
    if (isLogged === false) {
      return (
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>
      )
    }
  }

  return (

    <nav className="navbar">
      <Link to="">Piccolo</Link>

      <form action="">
        <input type="search" name="" id="" placeholder="Search.." />
      </form>

      {isAuthenticated()}

    </nav>

  );
}

export default Navbar;
