import "./Navbar.css"
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from "../../contexts/auth-context";
import { logout } from "../../axios_utils/login_logout_register";

function Navbar() {

  const { isLogged, setIsLogged } = useAuth()

  function logout_call() {
    logout()
      .then((res) => {
        if (res === 'success') {
          setIsLogged(false)
        }
      })
  }

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
            <Link onClick={logout_call}>Logout</Link>
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
