export default function Item({title="Example Title", image, description, price, stock}){
    return (
        <div className="item">
            <p className="itemTitle">{title}</p>
            <img className="itemImg" src={image} alt={title} title={description}/>
            <div className="stockFields">
                
            </div>
        </div>
    );
}