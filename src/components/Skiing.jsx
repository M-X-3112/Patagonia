import React, { useContext } from "react";
import { PatagoniaContext } from "../Data/db";
import "../Css/books.css";
import "../Css/activ.css";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { BASKET } from "../Context/BasketContext";
import { WISH } from "../Context/WishContext";

function Skiing() {
  const { mens, womens } = useContext(PatagoniaContext);
  const { addToBasket, addedItems } = useContext(BASKET);
  const { addToWish, deleteFromWish, likedItems } = useContext(WISH);
  const toggleLike = (item) => {
    if (likedItems[item.id]) {
      deleteFromWish(item.id);
    } else {
        addToWish(
          item.id,
          item.thumb,
          item.name,
          item.price,
          item.currency
        );
      }
    }  
  const toggleCart = (item) => {
    if (addedItems[item.id]) {
      deleteFromBasket(item.id);
    } else {
        addToBasket(
          item.id,
          item.thumb,
          item.name,
          item.price,
          item.currency
        );
      }
    }
  return (
    <div className="skiing-main">
      <img className="img-sk" src="./src/images/sking.jpg" alt="skiing" />
      <h1>Skiing & Snowboarding</h1>
      <p>
        Skiing is an exhilarating winter sport that combines speed, skill, and
        breathtaking scenery. Whether gliding down powdery slopes in the
        mountains or navigating cross-country trails through snow-covered
        forests, skiing offers something for everyone. It’s a great way to stay
        active, enjoy the crisp winter air, and connect with nature. From
        beginners learning the basics to seasoned experts carving through
        challenging terrain, skiing is a sport that inspires adventure and
        fosters a sense of freedom.
      </p>
      <h3>Men Jackets</h3>
      <div className="m-j-sking">
        {mens.jackets.map((item) => {
          return (
            <Link
              key={item.id}
              className="books-card"
              to={`/men/jackets/${item.id}`}
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
      <h3>Women Jackets</h3>
      <div className="w-j-sking">
        {womens.jackets.map((item) => {
          return (
            <Link
              key={item.id}
              className="books-card"
              to={`/women/jackets/${item.id}`}
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

export default Skiing;
