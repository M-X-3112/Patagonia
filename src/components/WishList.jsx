import React, { useContext } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { WISH } from "../Context/WishContext";
import { BASKET } from "../Context/BasketContext";
import "../Css/wishlist.css";
import { Link, useParams } from "react-router-dom";

function WishList() {
  const { wish, deleteFromWish } = useContext(WISH);
  const {deyisen} = useParams()
  // const { addToBasket, addedItems, deleteFromBasket } = useContext(BASKET);

  return (
    <div className="wish-mainn">
      {wish.length > 0 ? (
        wish.map((item) => (
          <div key={item.id} className="books-card">
            <div className="book-bg"></div>
            <span
              onClick={(e) => {
                e.preventDefault();
                deleteFromWish(item.id);
              }}
            >
              {<RiDeleteBin5Fill />}
            </span>
            <img src={item.thumb} alt="books-img" />
            <div className="books-card-text">
              <h5>{item.name}</h5>
              <h6>
                {item.price} {item.currency}
              </h6>
            </div>
          </div>
        ))
      ) : (
        <div
          style={{
            width: "100%",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <h1>No products have been approved</h1>
        </div>
      )}
    </div>
  );
}

export default WishList;
