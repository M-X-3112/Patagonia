import React from "react";
import "../Css/books.css";
import "../Css/kids.css";
import { Link, Outlet } from "react-router-dom";

function Womens() {
  return (
    <div className="books-main">
      <h1>Women</h1>
      <hr />
      <h3 className="h-a-x">Women are indecisive, as they are always right</h3>
      <div className="category-baby">
        <ul>
          <li>
            <Link to={"jackets"} className="kid-l">
              Jackets
            </Link>
          </li>
          <li>
            <Link to={"socks"} className="kid-l">
              Socks
            </Link>
          </li>
          <li>
            <Link to={"accessories"} className="kid-l">
              Accessories
            </Link>
          </li>
          <li>
            <Link to={"bottoms"} className="kid-l">
              Bottoms
            </Link>
          </li>
          <li>
            <Link to={"tops"} className="kid-l">
              Tops
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Womens;
