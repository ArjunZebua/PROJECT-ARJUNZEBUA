import { EqualApproximately } from "lucide-react";
import { UserPen } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { House } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false); // State untuk toggle menu
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  function toggleMenu() {
    setMenuActive(!menuActive); // Toggle menu active state
  }

  return (
    <header className="header">
      <h1 className="title-header" >BagInstyle Girls</h1>
      <nav className={`navigasi ${menuActive ? "active" : ""}`}>
        <ul className="container-link">
          <li className="header-link">
            <Link to="/"><House />Home</Link>
          </li>
          <li className="header-link">
            <Link to="/Profil"><UserPen />Profil</Link>
          </li>
          <li className="header-link">
            <Link to="/about"><EqualApproximately />About</Link>
          </li>
          <li className="header-link">
            <Link to="/product"><ShoppingCart />Product</Link>
          </li>
          <li className="header-link">
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
        <span className="menu-icon" onClick={toggleMenu}>
          ☰
        </span>
      </nav>
    </header>
  );
}

