import Navbar from "../components/Navbar.jsx"
import Item from "../components/Item.jsx";
import '../App.css'
import { useEffect, useState } from "react"
import js from "@eslint/js";

export default function Shop({updateCartProducts}) {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  async function fetchProducts(){
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            if(!response.ok){
            throw new Error(response.status);
            }
            return response.json();
        }catch(error){
            console.log(error);
        }
    } 

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

    useEffect(() => {
        let ignore = false;
        fetchProducts().then(result => {
        if(!ignore){
            setProducts(result);
        }
        })
        return(() => {
        ignore = true;
    })}, []);

  return (
    <div id="shop">
        <Navbar></Navbar>
        <h1 className="title">Shop</h1>
        <div id="itemContainer">
          {products.map(product => (
            <Item key={product.title} title={product.title} image={product.image} 
            description={product.description} price={product.price} stock={product.rating.count}
            handleCartProducts={handleCartProducts}></Item>
          ))}
        </div>
    </div>
  )
}


