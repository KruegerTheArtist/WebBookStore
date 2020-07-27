import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "../models/Item";
import "./Bestsellers.css";
import * as axios from "axios";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 8 }
];

const Bestsellers = (props) => {
  axios.get('https://localhost:44394/api/Book/GetBooks/take/3/skip/0').then(response => {
    console.log('response', response);
    
  })
  return (
    <div>
      <div className="first-line">
        <Carousel breakPoints={breakPoints}>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item>
          <Item>6</Item>
          <Item>7</Item>
          <Item>8</Item>
        </Carousel>
      </div>
      <div className="second-line">
        <Carousel breakPoints={breakPoints}>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item>
          <Item>6</Item>
          <Item>7</Item>
          <Item>8</Item>
        </Carousel>
      </div>
      <div className="third-line">
        <Carousel breakPoints={breakPoints}>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item>
          <Item>6</Item>
          <Item>7</Item>
          <Item>8</Item>
        </Carousel>
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Bestsellers />, rootElement);

export default Bestsellers;