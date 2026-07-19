import Home from "../routes/Home";
import Shop from "../routes/Shop";
import Cart from "../routes/Cart";
import Error from "../routes/Error";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

export default function Router(){
    const [cartProducts, setCartProducts] = useState([]);
    
    function updateCartProducts(newCartProducts){
        setCartProducts(newCartProducts);
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <Error />,
        },
        {
            path:  "/shop",
            element: <Shop savedProducts={cartProducts} updateCartProducts={updateCartProducts}/>,
        },
        {
            path: "/cart",
            element: <Cart cart={cartProducts}/>,
        }
    ]);
    
    return (<RouterProvider router={router} />);
}