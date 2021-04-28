import React from "react";
import "./home.scss";
import { Products } from "../Products/Products";
import { Contact } from "../Contact/Contact";
export const Home = () => {
  return (
    <div className="hom-1" id='home-1'>
      <div className="home">
        <h1>فروشگاه های زنجیره ای اتکا</h1>
      </div>
      <Products />
      <Contact/>
    </div>
  );
};
