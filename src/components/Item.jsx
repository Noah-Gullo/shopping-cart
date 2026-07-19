import { useState } from "react";
export default function Item({title="Example Title", image, description, price, stock}){
    const [count, setCount] = useState(0);

    function handleChange(newCount){
        if(newCount >= 0 && newCount <= stock){        
            setCount(newCount);
        }
    }

    function incrementCount(){
        if(count + 1 <= stock){
            setCount(count + 1);
        }
    }

    function decrementCount(){
        if(count - 1 >= 0){
            setCount(count - 1);
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
        </div>
    );
}