import Navbar from "../components/Navbar.jsx"
import '../App.css'

export default function Cart({itemCount, cart = []}) {
  return (
    <div id="cart">
        <Navbar itemCount={itemCount}></Navbar>
        <h1 className="title">Cart</h1>
        {cart.map(product => (
          <p key={product.title}>{product.count} - {product.title} Total Price: ${product.count * product.price}</p>
        ))}
    </div>
  )
}