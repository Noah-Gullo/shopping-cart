import { useState } from "react";
export default function Item({title="Example Title", image, description, price, stock}){
    const [count, setCount] = useState(0);

    function handleChange(newCount){
        if(newCount >= 0 && newCount <= stock){        
            setCount(newCount);
        }
    }

    function incrementCount(){
        const newCount = count + 1;
        if(newCount <= stock){
            setCount(newCount);
        }
    }

    function decrementCount(){
        const newCount = count -1;
        if(newCount >= 0){
            setCount(newCount);
        }
    }

    return (
        <div className="item">
            <p className="itemTitle">{title}</p>
            <img className="itemImg" src={image} alt={title} title={description}/>
            <div className="stockFields">
                <button onClick={decrementCount}>-</button>
                <input type="number" value={count} placeholder="0" min="0" max={stock} onChange={(e) => handleChange(Number(e.target.value))}></input>
                <button onClick={incrementCount}>+</button>
            </div>
            <p>Items in Stock: {stock - count}</p>
        </div>
    );
}