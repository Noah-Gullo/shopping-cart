import Home from "../routes/Home";
import Shop from "../routes/Shop";
import Cart from "../routes/Cart";
import Error from "../routes/Error";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

export default function Router(){
    const [cartProducts, setCartProducts] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    
    function updateCartProducts(newCartProducts){
        setCartProducts(newCartProducts);
        getItemCount();
        console.log(newCartProducts);
    }

    function getItemCount(){
        let count = 0;
        for(let i = 0; i < cartProducts.length; i++){
            count += cartProducts[i].count;
        }   
        setItemCount(count);
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home itemCount={itemCount}/>,
            errorElement: <Error />,
        },
        {
            path:  "/shop",
            element: <Shop itemCount={itemCount} savedProducts={cartProducts} updateCartProducts={updateCartProducts}/>,
        },
        {
            path: "/cart",
            element: <Cart itemCount={itemCount} cart={cartProducts} updateCartProducts={updateCartProducts}/>,
        }
    ]);
    
    return (<RouterProvider router={router} />);
}