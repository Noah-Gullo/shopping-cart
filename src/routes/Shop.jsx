import Navbar from "../components/Navbar.jsx"
import Item from "../components/Item.jsx";
import '../App.css'
import { useEffect, useState } from "react"
import js from "@eslint/js";

export default function Shop() {
  const [products, setProducts] = useState([]);

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
            <Item key={product.title} title={product.title} image={product.image} description={product.description} price={product.price} stock={product.rating.count}></Item>
          ))}
        </div>
    </div>
  )
}


