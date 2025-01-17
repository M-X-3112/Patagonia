import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import BasketContext from "./Context/BasketContext.jsx";
import WishContext from "./Context/WishContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WishContext>
    <BasketContext>
      <App />
    </BasketContext>
    </WishContext>
  </BrowserRouter>
);
