import React, { useContext, useState } from "react";
import { PatagoniaContext } from "../Data/db";
import "../Css/books.css";
import "../Css/activ.css";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { BASKET } from "../Context/BasketContext";
import { WISH } from "../Context/WishContext";
import { Link } from "react-router-dom";

function Climbing() {
  const { mens, womens } = useContext(PatagoniaContext);
  const { addToBasket, addedItems } = useContext(BASKET);
  const { addToWish, deleteFromWish, likedItems } = useContext(WISH);
  const toggleLike = (item) => {
    if (likedItems[item.id]) {
      deleteFromWish(item.id);
    } else {
      addToWish(item.id, item.thumb, item.name, item.price, item.currency);
    }
  };
  const toggleCart = (item) => {
    if (addedItems[item.id]) {
      deleteFromBasket(item.id);
    } else {
      addToBasket(item.id, item.thumb, item.name, item.price, item.currency);
    }
  };
  return (
    <div className="skiing-main">
      <img className="img-sk" src="./src/images/running.jpg" alt="skiing" />
      <h1>Trail running</h1>
      <p>
        Trail running is an invigorating sport that combines the joys of running
        with the beauty of nature. Unlike road running, it takes you off the
        beaten path, traversing rugged terrains, forest trails, and mountain
        landscapes. It challenges your agility, endurance, and focus as you
        navigate uneven surfaces and varying elevations. Beyond the physical
        benefits, trail running provides a mental escape, offering solitude and
        a sense of freedom amidst breathtaking natural surroundings. It’s more
        than just a workout—it’s an adventure.
      </p>
      <h3>Men Tops</h3>
      <div className="m-j-sking">
        {mens.tops.map((item) => {
          return (
            <Link
              key={item.id}
              className="books-card"
              to={`/men/tops/${item.id}`}
            >
              <div className="book-bg"></div>
              <span
                onClick={(e) => {
                  toggleLike(item);
                  e.preventDefault();
                }}
              >
                {likedItems[item.id] ? <FaHeart /> : <FaRegHeart />}
              </span>
              <button
                className="add-bag"
                onClick={(e) => {
                  e.preventDefault();
                  toggleCart(item);
                }}
              >
                Add to Bag
              </button>
              <img src={item.thumb} alt="books-img" />
              <div className="books-card-text">
                <h5>{item.name}</h5>
                <h6>
                  {item.price} {item.currency}
                </h6>
              </div>
            </Link>
          );
        })}
      </div>
      <h3>Women Tops</h3>
      <div className="w-j-sking">
        {womens.tops.map((item) => {
          return (
            <Link
              key={item.id}
              className="books-card"
              to={`/women/tops/${item.id}`}
            >
              <div className="book-bg"></div>
              <span
                onClick={(e) => {
                  toggleLike(item);
                  e.preventDefault();
                }}
              >
                {likedItems[item.id] ? <FaHeart /> : <FaRegHeart />}
              </span>
              <button
                className="add-bag"
                onClick={(e) => {
                  e.preventDefault();
                  toggleCart(item);
                }}
              >
                Add to Bag
              </button>
              <img src={item.thumb} alt="books-img" />
              <div className="books-card-text">
                <h5>{item.name}</h5>
                <h6>
                  {item.price} {item.currency}
                </h6>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Climbing;
