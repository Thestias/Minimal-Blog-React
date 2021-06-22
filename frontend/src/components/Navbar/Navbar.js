import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (

    <nav className="navbar">
      <Link to="">Piccolo</Link>

      <form action="">
        <input type="search" name="" id="" placeholder="Search.." />
      </form>

      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </nav>

  );
}

export default Navbar;
