import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PatagoniaContext } from "../Data/db";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "../Css/books.css";
import { WISH } from "../Context/WishContext";
import { BASKET } from "../Context/BasketContext";

function MCategory() {
  const { addToBasket, addedItems } = useContext(BASKET);
  const { addToWish, deleteFromWish, likedItems } = useContext(WISH);
  const { mens } = useContext(PatagoniaContext);
  const { categorym } = useParams();
  const toggleLike = (id) => {
    if (likedItems[id]) {
      deleteFromWish(id);
    } else {
      const likedProduct = mens[categorym].find((item) => item.id === id);
      if (likedProduct) {
        addToWish(
          likedProduct.id,
          likedProduct.thumb,
          likedProduct.name,
          likedProduct.price,
          likedProduct.currency
        );
      }
    }
  }
  const toggleCart = (id) => {
    if (addedItems[id]) {
      deleteFromBasket(id);
    } else {
      const addedProduct = mens[categorym].find((item) => item.id === id);
      if (addedProduct) {
        addToBasket(
          addedProduct.id,
          addedProduct.thumb,
          addedProduct.name,
          addedProduct.price,
          addedProduct.currency
        );
      }
    }
  };
  return (
    <div className="bookshop">
      {categorym &&
        mens[categorym].map((item) => {
          return (
            <Link key={item.id} className="books-card" to={`/men/${categorym}/${item.id}`}>
              <div className="book-bg"></div>
              <span onClick={(e) => {toggleLike(item.id); e.preventDefault()}}>
                {likedItems[item.id] ? <FaHeart /> : <FaRegHeart />}
              </span>
              <button className="add-bag"
              onClick={(e) => {
                e.preventDefault();
                toggleCart(item.id);
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
  );
}

export default MCategory;
