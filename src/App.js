import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemList from "./components/itemList";
import { useState } from "react";
import Cart from "./components/Cart";
function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className="d-flex justify-content-between align-items-center">
            <h1>Grocery List</h1>
            <Link to="/cart" className="cart-link mt-0">
              View Cart
            </Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ItemList cartItems={cart} handleAddToCart={handleAddToCart} />
              }
            />
            <Route
              exact
              path="/cart"
              element={
                <Cart cartItems={cart}  />
              }
            />
          </Routes>
        </main>
        <footer>Copyrights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
