import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PatagoniaContext } from "../Data/db";
import { BASKET } from "../Context/BasketContext";
import { IoArrowUndoSharp } from "react-icons/io5";
import { PiMetaLogoBold } from "react-icons/pi";
import { GiCottonFlower, GiWorld } from "react-icons/gi";
import "../Css/bookid.css";
import { MdFitbit } from "react-icons/md";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { CircularProgress } from "@mui/material";

function BookId() {
  const { idb } = useParams();
  const { books } = useContext(PatagoniaContext);
  const { addToBasket } = useContext(BASKET);
  const [loading, setLoading] = useState(true);

  const book = books.find((item) => item.id === idb);

  useEffect(() => {
    setLoading(!book);
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [book]);
  if (loading) {
    return (
      <div
        className="spinner-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px",
        }}
      >
        <CircularProgress size={60} />
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="idb-1">
      <div className="idb-1-left">
        <h3>Category: {book.category}</h3>
        <TransformWrapper>
          <TransformComponent>
            <img src={book.thumb} alt="test" />
          </TransformComponent>
        </TransformWrapper>
      </div>
      <div className="idb-1-right">
        <h1>{book.name}</h1>
        <h5>Review : {book.reviews}</h5>
        <h5>Availability : {book.availability}</h5>
        <h5>Quantity : {book.stock_quantity}</h5>
        <h3 className="idb-price">
          {book.price} {book.currency}
        </h3>
        <button
          onClick={(e) => {
            e.preventDefault();
            addToBasket(
              book.id,
              book.thumb,
              book.name,
              book.price,
              book.currency
            );
          }}
        >
          Add to Bag
        </button>
        <h3>Shipping & Exchanges</h3>
        <p>{book.shipping_and_exchanges}</p>
        <h3>
          <GiCottonFlower style={{ marginRight: "10px" }} /> Materials
        </h3>
        <p>{book.materials}</p>
        <h3>Specs and Features</h3>
        <p>{book.specs_and_features}</p>
        <h3>
          <MdFitbit style={{ marginRight: "10px" }} /> Fit
        </h3>
        <p>
          <b>Type :</b> {book.fit.type}
        </p>
        <p>
          <b>Customer Feedback :</b> {book.fit.customer_feedback}
        </p>
        <h3>Care Instructions</h3>
        <p>{book.care_instructions}</p>
        <h3>Warranty</h3>
        <p className="warranty-idb">
          <IoArrowUndoSharp style={{ marginRight: "10px" }} />{" "}
          {book.warranty[0]}
        </p>
        <p className="warranty-idb">
          <PiMetaLogoBold style={{ marginRight: "10px" }} /> {book.warranty[1]}
        </p>
        <p className="warranty-idb">
          <GiWorld style={{ marginRight: "10px" }} /> {book.warranty[2]}
        </p>
      </div>
    </div>
  );
}

export default BookId;
