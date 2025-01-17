import React from "react";
import "../Css/books.css"
import { FaHeart, FaRegHeart } from "react-icons/fa";

const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

function BokksCard({item}) {
  return (
    <div key={item.id} className="books-card">
      <div className="book-bg"></div>
      <span
        onClick={() => {
          toggleLike(item.id);
          !likedItems[item.id] ? addToWish(item.id) : deleteFromWish(item.id);
        }}
      >
        {likedItems[item.id] ? <FaHeart /> : <FaRegHeart />}
      </span>
      <button
        onClick={() =>
          addToBasket(item.id, item.image, item.name, item.price, item.currency)
        }
      >
        Add to Bag
      </button>
      <img src={item.image} alt="books-img" />
      <div className="books-card-text">
        <h5>{item.name}</h5>
        <h6>
          {item.price} {item.currency}
        </h6>
      </div>
    </div>
  );
}

export default BokksCard;
