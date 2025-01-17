import React, { useContext, useEffect, useState } from "react";
import { BASKET } from "../Context/BasketContext";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "../Css/basketmenu.css";

function BasketMenu() {
  const { basket, deleteFromBasket } = useContext(BASKET);
  const [quant, setQuant] = useState(() => {
    const savedQuantities = localStorage.getItem("basketQuantities");
    return savedQuantities
      ? JSON.parse(savedQuantities)
      : basket.reduce((acc, item) => {
          acc[item.id] = 0;
          return acc;
        }, {});
  });
  useEffect(() => {
    localStorage.setItem("basketQuantities", JSON.stringify(quant));
  }, [quant]);
  const updateQuantity = (id, delta) => {
    setQuant((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };
  const totalAmount = basket.reduce(
    (sum, item) => sum + (quant[item.id] || 0) * item.price,
    0
  );
  const chosenQ = Object.values(quant).filter((q) => q > 0).length;

  return (
    <div className="basket-mainn">
      <div className="left-product">
        {basket.length > 0 ? (
          basket.map((item) => (
            <div key={item.id} className="books-card">
              <div className="book-bg"></div>
              <span
                onClick={() => {
                  deleteFromBasket(item.id);
                  setQuant((prev) => {
                    const updatedQuant = { ...prev };
                    delete updatedQuant[item.id];
                    return updatedQuant;
                  });
                }}
              >
                {<RiDeleteBin5Fill />}
              </span>
              <img src={item.thumb} alt="books-img" />
              <span className="quant-t">{quant[item.id] || 0}</span>
              <button
                className="left-quant"
                onClick={() => updateQuantity(item.id, 1)}
              >
                +
              </button>
              <button
                className="right-quant"
                onClick={() => updateQuantity(item.id, -1)}
              >
                -
              </button>
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
            <h1>No products have been added to the cart</h1>
          </div>
        )}
      </div>
      <div className="right-pay">
        <div className="total-sum">
          <h3>Total Amount : {totalAmount} $</h3>
          <h4>Product choosen : {chosenQ}</h4>
        </div>
        <button>Pay Now</button>
        <h3 className="ironclad"> Ironcloud Guarantee</h3>
        <p>If you are not satisfied with one of our products at the time you receive it, or if one of our products does not perform to your satisfaction, return it to the store you bought it from or to Patagonia for a repair, replacement or refund.</p>
      </div>
      <div className="payload">

      </div>
    </div>
  );
}

export default BasketMenu;
