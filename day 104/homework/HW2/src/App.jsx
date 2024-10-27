import React from "react";
import './index.css';


import { useState } from 'react';

function App() {
  const [mainImgSrc, setMainImgSrc] = useState('https://assets.ee.ge/product_images/F6sOlj6axs-1.jpg');

  const i1 = () => setMainImgSrc('https://assets.ee.ge/product_images/F6sOlj6axs-1.jpg');
  const i2 = () => setMainImgSrc('https://assets.ee.ge/product_images/uae0a9DQ9F-1.jpg');
  const i3 = () => setMainImgSrc('https://assets.ee.ge/product_images/HggbKr8snP-1.jpg');

  return (
    <div className="container">
      <nav>
        <h1>Iphone 16!</h1>
      </nav>

      <div className="bg">
        <div className="main">
          <img src={mainImgSrc} alt="iPhone" className="mainimg" />
        </div>

        <div className="info">
          <div className="txt1">
            <p>Screen Size: </p>
            <p style={{ marginLeft: '150px', position: 'fixed', left: '720px' }}>6.1 Inches</p>
          </div>
          <div className="line1"></div>

          <div className="txt2">
            <p>Refresh Rate: </p>
            <p style={{ marginLeft: '150px', position: 'fixed', left: '730px' }}>60 Hz</p>
          </div>
          <div className="line2"></div>

          <div className="txt3">
            <p>Screen Type: </p>
            <p style={{ marginLeft: '100px', position: 'fixed', left: '680px' }}>Super Retina XDR OLED</p>
          </div>
          <div className="line3"></div>

          <div className="txt4">
            <p>Internal Memory: </p>
            <p style={{ marginLeft: '100px', position: 'fixed', left: '780px' }}>128 GB</p>
          </div>
          <div className="line4"></div>

          <div className="txt5">
            <p>Color: </p>
            <p style={{ marginLeft: '150px', position: 'fixed', left: '690px' }}>Black Titanium</p>
          </div>
          <div className="line5"></div>

          <div className="addtocart-buy">
            <button className="addtocart">
              <img src="./images/grocery-store.png" alt="Add to Cart" id="cart" className="CB" />
              <p id="p1">Add To Cart</p>
            </button>
            <button className="buy">
              <img src="./images/payment-method.png" alt="Buy Now" id="buy" className="CB" />
              <p id="p2">Buy Now</p>
            </button>
          </div>
        </div>

        <div className="miniImg">
          <img src="https://assets.ee.ge/product_images/F6sOlj6axs-1.jpg" alt="1" onClick={i1} id="i1" />
          <img src="https://assets.ee.ge/product_images/uae0a9DQ9F-1.jpg" alt="2" onClick={i2} id="i2" />
          <img src="https://assets.ee.ge/product_images/HggbKr8snP-1.jpg" alt="3" onClick={i3} id="i3" />
        </div>
      </div>
    </div>
  );
}

export default App;

{/* <header className="header">
<h1>iPhone 15 Pro Max</h1>
<p>Experience the future with the most advanced iPhone yet.</p>
</header>

<section className="images">
<img src="iphone-front.jpg" alt="iPhone Front" />
<img src="iphone-back.jpg" alt="iPhone Back" />
</section>

<section className="features">
<h2>Features</h2>
<ul>
  <li>6.7-inch Super Retina XDR display</li>
  <li>A17 Pro Chip for extreme performance</li>
  <li>48 MP Pro Camera system</li>
  <li>Up to 1TB storage options</li>
</ul>
</section>

<footer className="buy">
<button>Buy Now</button>
</footer> */}