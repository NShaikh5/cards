function Card(props){
    return (
    <>
    <div className="box">
    <h1>ID: {props.id}</h1>
    <h2>{props.title}</h2>
    <img src={props.imgSrc}></img>
    <h3>{props.price}</h3>
    <button onClick={props.action}>ADD TO CART</button>
    </div>
    
        


    </>
)}
export default Card;