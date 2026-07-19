import { Link } from "react-router";

function Navbar(){
    return (
        <div id="navbar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/shop">Shop</Link>
            <Link className="link" to="/cart">Cart</Link>
        </div>
    );
}

export default Navbar;