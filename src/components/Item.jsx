import { useState } from "react";

export default function Item({isShop=true, title="Example Title", image, description, price, stock, cartCount = 0, handleCartProducts}){
    const [count, setCount] = useState(cartCount);

    function handleChange(newCount){
        const currItem = {"title": title, "image": image, "price": price, "count": newCount};
        if(newCount >= 0 && newCount <= stock){        
            setCount(newCount);
            handleCartProducts(currItem);
        }
    }

    function incrementCount(){
        const newCount = count + 1;
        const currItem = {"title": title, "image": image, "price": price, "count": newCount};
        if(newCount <= stock){
            setCount(newCount);
            handleCartProducts(currItem)
        }
    }

    function decrementCount(){
        const newCount = count -1;
        const currItem = {"title": title, "image": image, "price": price, "count": newCount};
        if(newCount >= 0){
            setCount(newCount);
            handleCartProducts(currItem);
        }
    }

    return (
        <>
            {isShop ? 
            <div className="shopItem">
                <p className="itemTitle">{title}</p>
                <img className="itemImg" src={image} alt={title} title={description}/>
                <div className="stockFields">
                    <button onClick={decrementCount}>-</button>
                    <input type="number" value={count} placeholder="0" min="0" max={stock} onChange={(e) => handleChange(Math.floor(Number(e.target.value)))}></input>
                    <button onClick={incrementCount}>+</button>
                </div>
                <p>Items in Stock: {stock - count}</p>
                <p>Price: ${price}</p>
            </div> : 

            <div className="cartItem">
                <p className="itemTitle">({cartCount}) {title}</p>
                <div className="stockFields">
                    <button onClick={decrementCount}>-</button>
                    <input type="number" value={count} placeholder="0" min="0" max={stock} onChange={(e) => handleChange(Math.floor(Number(e.target.value)))}></input>
                    <button onClick={incrementCount}>+</button>
                </div>
            </div>}
        </>
    );
}