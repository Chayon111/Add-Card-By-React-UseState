import "./Card.css";
// eslint-disable-next-line react/prop-types
const Card = ({title,content}) =>{
    return(
        <div className="card" >
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
}

export default Card;