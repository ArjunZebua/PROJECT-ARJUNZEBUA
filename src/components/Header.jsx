import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Header(){
    const navigate = useNavigate();
    const {keranjang}=useContext(CartContext);
    function handleLogout() {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
      }
    return(     
        <header className="header">
            <h1 className="title-header">BagInstyle</h1>
            <nav className="navigasi">
                <ul className="container-link">
                <li className="header-link">
                    <Link to="/">Home</Link>
                </li>
                <li className="header-link">
                    <Link to="/about">About</Link>
                </li>
                <li><Link to="/product">Product</Link></li>
                <li><ShoppingCart />({keranjang.length})</li>

                </ul>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            </header> 
    )
}