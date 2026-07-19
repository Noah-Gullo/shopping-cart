import Navbar from "../components/Navbar.jsx"
import '../App.css'

export default function Cart({cart = []}) {
  return (
    <div id="cart">
        <Navbar></Navbar>
        <h1 className="title">Cart</h1>
        {cart.map(product => (
          <p key={product.title}>{product.count} - {product.title}</p>
        ))}
    </div>
  )
}