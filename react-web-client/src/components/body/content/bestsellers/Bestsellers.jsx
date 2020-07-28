import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Book from "../models/Book";
import "./Bestsellers.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 8 }
];

const Bestsellers = (props) => {
  let newArray = [];
  if (props.books) {
    newArray = props.books.map((b) => {
      return <Book key={b.id} title={b.name} price={b.price} url={b.url} />
    });
  }

  return (
    <div>
      <div className="first-line">
        <Carousel breakPoints={breakPoints}>
          {newArray}
        </Carousel>
      </div>
      <div className="second-line">
        <Carousel breakPoints={breakPoints}>
          {newArray}
        </Carousel>
      </div>
      <div className="third-line">
        <Carousel breakPoints={breakPoints}>
          {newArray}
        </Carousel>
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Bestsellers />, rootElement);

export default Bestsellers;