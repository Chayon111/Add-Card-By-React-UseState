import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [card, setCard] = useState([{ title: "Card 1", content: "Content 1" }]);

  const cardGenarator = () => {
    const newObject = {
      title: `Card ${card.length + 1}`,
      content: `Content ${card.length + 1}`,
    };
    setCard([...card, newObject]);
  };

  return (
    <div>
      <button className="cardGenaretor" onClick={cardGenarator}>
        Genarate New Card
      </button>
      <div className="card-container">
        {card.map((card, index) => {
          return (
            <div key={index}>
              <Card title={card.title} content={card.content} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
