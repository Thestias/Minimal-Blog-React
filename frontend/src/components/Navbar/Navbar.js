import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useAuth } from "../../contexts/auth-context";

function Navbar() {

  const { isLogged } = useAuth()

  return (

    <nav className="navbar">
      <Link to="">Piccolo</Link>

      <form action="">
        <input type="search" name="" id="" placeholder="Search.." />
      </form>

      {
        isLogged ?
          <>
            <Link to="/submit-blog">Add Blog</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/logout">Logout</Link>
          </>
          :
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
      }

    </nav>

  );
}

export default Navbar;
