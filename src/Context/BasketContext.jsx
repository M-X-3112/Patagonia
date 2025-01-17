import React, { Children, createContext, useState } from "react";
import { Cookies } from "react-cookie";

export const BASKET = createContext(null);

function BasketContext({ children }) {
  const cookie = new Cookies()
  const [ basket, setBasket ] = useState(cookie.get("basket") || []);
  const [addedItems, setAddedItems] = useState(() => {
      const storedItems = localStorage.getItem("addedItems");
      return storedItems ? JSON.parse(storedItems) : {};
    });
  function addToBasket(id, thumb, name, price, currency) {
        const products = basket.find((item) => item.id === id)
        if (!products) {
          const updatedCart = [...basket, {id, thumb, name, price, currency}];
          setBasket(updatedCart);
          cookie.set("basket", updatedCart)
          }
  }

  function deleteFromBasket(id) {
    const updatedBasket = basket.filter((item) => item.id !== id);
    setBasket(updatedBasket);
    cookie.set("basket", updatedBasket)

    if (updatedBasket.length === 0) {
      cookie.remove("basket");
    }

  }


  
  return (
    <BASKET.Provider value={{ addedItems, basket, setBasket, addToBasket, deleteFromBasket }}>
      {children}
    </BASKET.Provider>
  );
}

export default BasketContext;
