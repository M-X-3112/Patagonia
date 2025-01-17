import React, { createContext, useState } from "react";
import { Cookies } from "react-cookie";

export const WISH = createContext(null);

function WishContext({ children }) {
  const cookie = new Cookies();
  const [wish, setWish] = useState(cookie.get("wish") || []);
  const [likedItems, setLikedItems] = useState(() => {
    const storedLikes = localStorage.getItem("likedItems");
    return storedLikes ? JSON.parse(storedLikes) : {};
  });

  function addToWish(id, thumb, name, price, currency) {
    const wishproduct = wish.find((item) => item.id === id);
    if (!wishproduct) {
      const updatedWish = [...wish, { id, thumb, name, price, currency }];
      setWish(updatedWish);
      cookie.set("wish", updatedWish);

      const updatedLikes = { ...likedItems, [id]: true };
      setLikedItems(updatedLikes);
      localStorage.setItem("likedItems", JSON.stringify(updatedLikes));
    }
  }

  function deleteFromWish(id) {
    const updatedWish = wish.filter((item) => item.id !== id);
    setWish(updatedWish);
    cookie.set("wish", updatedWish);

    const updatedLikes = { ...likedItems };
    delete updatedLikes[id];
    setLikedItems(updatedLikes);
    localStorage.setItem("likedItems", JSON.stringify(updatedLikes));

    if (updatedWish.length === 0) {
      cookie.remove("wish");
    }
  }

  return (
    <WISH.Provider value={{ wish, likedItems, addToWish, deleteFromWish }}>
      {children}
    </WISH.Provider>
  );
}

export default WishContext;
