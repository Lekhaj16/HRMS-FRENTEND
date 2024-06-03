import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Product from './Product';
import LoginForm from './LoginForm';
import Cart from './Cart';
import './App.css';

const HomePage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  const addToCart = (product) => {
    console.log("Adding product to Cart:", product);
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="homepage-container">
      <header>
        <Link to="/">
          <h1>Amazon</h1>
        </Link>
        <nav>
          <Link to="/cart">
            <button>
              <span role="img" aria-label="cart">
                🛒
              </span>
              Cart
            </button>
          </Link>
          <input type="text" placeholder="Search" />
          <button onClick={handleLoginClick}>Login</button>
        </nav>
      </header>

      {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />}

      <section className="product-list">
        <Product
          id="1"
          title="Product 1"
          price={19.99}
          image="product1.jpg"
          onAddToCart={addToCart}
        />
        <Product
          id="2"
          title="Product 2"
          price={29.99}
          image="product2.jpg"
          onAddToCart={addToCart}
        />
        <Product
          id="3"
          title="Product 3"
          price={39.99}
          image="product3.jpg"
          onAddToCart={addToCart}
        />
        {/* Add more products as needed */}
      </section>

      <Routes>
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </div>
  );
};

export default HomePage;
