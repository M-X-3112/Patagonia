import React, { useContext } from "react";
import { PatagoniaContext } from "../Data/db";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "../Css/books.css";
import { BASKET } from "../Context/BasketContext";
import { WISH } from "../Context/WishContext";
import { Link } from "react-router-dom";

function Accesories() {
  const { accesories } = useContext(PatagoniaContext);
  const { addToBasket, deleteFromBasket, addedItems } = useContext(BASKET);
  const { addToWish, deleteFromWish, likedItems } = useContext(WISH);

  const toggleLike = (id) => {
    if (likedItems[id]) {
      deleteFromWish(id);
    } else {
      const likedProduct = accesories.find((item) => item.id === id);
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
  };
  const toggleCart = (id) => {
    if (addedItems[id]) {
      deleteFromBasket(id);
    } else {
      const addedProduct = accesories.find((item) => item.id === id);
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
    <div className="books-main">
      <h1>Hats & Accessories</h1>
      <hr />
      <div className="bookshop">
        {accesories.map((item) => (
          <Link key={item.id} className="books-card" to={`/accesories/${item.id}`}>
            <div className="book-bg"></div>
            <span
              id="card-like-change"
              onClick={(e) => {
                e.preventDefault();
                toggleLike(item.id);
              }}
            >
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
        ))}
      </div>
    </div>
  );
}

export default Accesories;
