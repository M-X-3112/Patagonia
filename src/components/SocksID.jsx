import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PatagoniaContext } from "../Data/db";
import { BASKET } from "../Context/BasketContext";
import { IoArrowUndoSharp } from "react-icons/io5";
import { PiMetaLogoBold } from "react-icons/pi";
import { GiCottonFlower, GiWorld } from "react-icons/gi";
import "../Css/bookid.css";
import "../Css/proimg.css";
import { MdFitbit } from "react-icons/md";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function SocksID() {
  const { idb } = useParams();
  const { socks } = useContext(PatagoniaContext);
  const { addToBasket } = useContext(BASKET);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  const acc = socks.find((item) => item.id === idb);

  const handleColorChange = (index) => {
    setSelectedColorIndex(index);
  };
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="idb-1">
      <div className="idb-1-left">
        <h3>Category: {acc.category}</h3>
        <div className="img-catalog">
          {acc.colors[selectedColorIndex]?.images.map((image, index) => (
            <div key={index} className="image-container">
              {isLargeScreen ? (
                <TransformWrapper initialScale={1} centerOnInit={true}>
                  <TransformComponent>
                    <img src={image} alt={acc.name} />
                  </TransformComponent>
                </TransformWrapper>
              ) : (
                <img src={image} alt={acc.name} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="idb-1-right">
        <h1>{acc.name}</h1>
        <h5>Review : {acc.reviews}</h5>
        <h5>Availability : {acc.availability}</h5>
        <h5>Quantity : {acc.stock_quantity}</h5>
        <h3 className="idb-price">
          {acc.price} {acc.currency}
        </h3>
        <button
          onClick={(e) => {
            e.preventDefault();
            addToBasket(acc.id, acc.thumb, acc.name, acc.price, acc.currency);
          }}
        >
          Add to Bag
        </button>
        <h3>Shipping & Exchanges</h3>
        <p>{acc.shipping_and_exchanges}</p>
        <div className="colors">
          <h3>Colors:</h3>
          {acc.colors.map((color, index) => (
            <div
              key={index}
              className="color-1"
              onClick={() => handleColorChange(index)}
              style={{ backgroundColor: color.hex_code }}
            ></div>
          ))}
        </div>
        <h3>Sizes:</h3>
        <div className="sizes">
          {acc.sizes.map((color, index) => (
            <div key={index}>{color}</div>
          ))}
        </div>
        <h3>
          <GiCottonFlower style={{ marginRight: "10px" }} /> Materials
        </h3>
        <p>{acc.materials}</p>
        <h3>Specs and Features</h3>
        <p>{acc.specs_and_features}</p>
        <h3>
          <MdFitbit style={{ marginRight: "10px" }} /> Fit
        </h3>
        <p>
          <b>Type :</b> {acc.fit.type}
        </p>
        <p>
          <b>Customer Feedback :</b> {acc.fit.customer_feedback}
        </p>
        <h3>Care Instructions</h3>
        <p>{acc.care_instructions}</p>
        <h3>Warranty</h3>
        <p className="warranty-idb">
          <IoArrowUndoSharp style={{ marginRight: "10px" }} /> {acc.warranty[0]}
        </p>
        <p className="warranty-idb">
          <PiMetaLogoBold style={{ marginRight: "10px" }} /> {acc.warranty[1]}
        </p>
        <p className="warranty-idb">
          <GiWorld style={{ marginRight: "10px" }} /> {acc.warranty[2]}
        </p>
      </div>
    </div>
  );
}

export default SocksID;
