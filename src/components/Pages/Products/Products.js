import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Card2 from "./Card";
import { Jumbotron } from "react-bootstrap";
import {shoes, trousers, shirts} from "./Data";
import "./Slider.scss";

export class Products extends Component {
  render() {
    const breakpoints = [
      { width: 1, itemsToShow: 1 },
      { width: 600, itemsToShow: 2 },
      { width: 900, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];
    return (
      <div id='products'>
      <Jumbotron>
        <h1>بهترین کفش های کتانی و تابستانی</h1>
        <Carousel breakPoints={breakpoints}>
          {shoes.map((prod) => {
            return (
              <Card2
                key={prod.id}
                prod={prod}
              />
            );
          })}
        </Carousel>
      </Jumbotron>
      <Jumbotron>
      <h1>شلوار های لی و کتان در سایزهای مختلف</h1>
      <Carousel breakPoints={breakpoints}>
        {trousers.map((prod) => {
          return (
            <Card2
              key={prod.id}
              prod={prod}
            />
          );
        })}
      </Carousel>
    </Jumbotron>
    <Jumbotron>
      <h1>انواع پیراهن های مردانه</h1>
      <Carousel breakPoints={breakpoints}>
        {shirts.map((prod) => {
          return (
            <Card2
              key={prod.id}
              prod={prod}
            />
          );
        })}
      </Carousel>
    </Jumbotron>
    </div>
    );
  }
}
