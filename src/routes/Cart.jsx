import Navbar from "../components/Navbar.jsx"
import Item  from "../components/Item.jsx"
import { useState } from "react"
import '../App.css'

export default function Cart({itemCount, cart = [], updateCartProducts}) {
  const [cartProducts, setCartProducts] = useState(cart);
  
  function handleCartProducts(newProduct){
        const cartProductsCopy = cartProducts;

        if(cartProductsCopy.length == 0){
            cartProducts.push(newProduct);
        }

        for(let i = 0; i < cartProductsCopy.length; i++){
            if(cartProductsCopy[i].title == newProduct.title){
                if(newProduct.count != 0){
                cartProductsCopy.splice(i, 1, newProduct);
                }else{
                    cartProductsCopy.splice(i, 1);
                }
                break;
            }else if(i == cartProductsCopy.length - 1){
                if(newProduct.count != 0){
                    cartProductsCopy.push(newProduct);
                }
            }
        }

        setCartProducts(cartProductsCopy);
        updateCartProducts(cartProductsCopy);
  }

  console.log(cartProducts);
  return (
    <div id="cart">
        <Navbar itemCount={itemCount}></Navbar>
        <h1 className="title">Cart</h1>
        <div id="itemContainer">
          {cart.map(product => (
            <Item key={product.title} isShop={false} title={product.title}
            price={product.price} cartCount = {product.count} stock={product.stock}
            handleCartProducts={handleCartProducts}></Item>
          ))}
        </div>
    </div>
  )
}