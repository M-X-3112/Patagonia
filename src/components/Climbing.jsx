import React, { useContext } from "react";
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
      <img className="img-sk" src="./src/images/climbing.jpg" alt="skiing" />
      <h1>Climbing</h1>
      <p>
        Climbing is a thrilling and challenging activity that tests both
        physical strength and mental determination. Whether scaling towering
        rock faces, tackling indoor climbing walls, or ascending rugged mountain
        peaks, it offers a sense of achievement and connection with nature.
        Climbers rely on skill, balance, and strategic thinking to navigate
        routes, often fostering teamwork and trust in group climbs. Beyond the
        physical benefits, climbing provides a unique perspective of the world,
        inspiring adventure and a deeper appreciation for the outdoors.
      </p>
      <h3>Men Bottoms</h3>
      <div className="m-j-sking">
        {mens.bottoms.map((item) => {
          return (
            <Link
              key={item.id}
              className="books-card"
              to={`/men/bottoms/${item.id}`}
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
      <h3>Women Bottoms</h3>
      <div className="w-j-sking">
        {womens.bottoms.map((item) => {
          return (
            <Link
              key={item.id}
              className="books-card"
              to={`/women/bottoms/${item.id}`}
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
