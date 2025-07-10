import React from 'react'
import './Amaz.css'
import { Link } from 'react-router-dom';

const products = [
  {
    title: "Starting ₹99 | Amazon Brands & more",
    items: [
      { src: "../img/image1.png", link: "https://example.com/product1", desc: "Starting ₹299 | Home storage & organization" },
      { src: "../img/image2.png", link: "https://example.com/product2", desc: "Up to 60% off | Storage & racks" },
      { src: "../img/image3.png", link: "https://example.com/product3", desc: "Starting ₹99 | Toys & games" },
      { src: "../img/image4.png", link: "https://example.com/product4", desc: "Up to 60% off | Jackets, dresses & more" },
    ],
    linkText: "Shop now",
  },
  {
    title: "Revamp your home in style",
    items: [
      { src: "../img/image5.png", link: "https://example.com/product5", desc: "Cushion covers, bedsheets & more" },
      { src: "../img/image6.png", link: "https://example.com/product6", desc: "Figurines, vases & more" },
      { src: "../img/image7.png", link: "https://example.com/product7", desc: "Home storage" },
      { src: "../img/image8.png", link: "https://example.com/product8", desc: "Lighting solutions" },
    ],
    linkText: "Explore all",
  },
  {
    title: "Appliances for your home | Up to 55% off",
    items: [
      { src: "../img/image9.png", link: "https://example.com/product9", desc: "Air conditioners" },
      { src: "../img/image10.png", link: "https://example.com/product10", desc: "Refrigerators" },
      { src: "../img/image11.png", link: "https://example.com/product11", desc: "Microwaves" },
      { src: "../img/image12.png", link: "https://example.com/product12", desc: "Washing machines" },
    ],
    linkText: "See more",
  },
  {
    title: "Starting ₹149 | Headphones",
    items: [
      { src: "../img/image13.png", link: "https://example.com/product13", desc: "Starting ₹149 | boAt" },
      { src: "../img/image14.png", link: "https://example.com/product14", desc: "Starting ₹349 | boult" },
      { src: "../img/image15.png", link: "https://example.com/product15", desc: "Starting ₹649 | Noise" },
      { src: "../img/image16.png", link: "https://example.com/product16", desc: "Starting ₹149 | Zebronics" },
    ],
    linkText: "See all offers",
  },
];

function AmazGridBox() {
  return (
    <>
      <Link to='/'>Home</Link> <br />
      <div className="cards-container">

        {products.map((product, index) => (
          <div className="card" key={index}>
            <h3>{product.title}</h3>

            <div className="card-grid">
              {product.items.map((item, idx) => (
                <div className="item" key={idx}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.src} alt={item.desc} />
                    <p>{item.desc}</p> </a>
                </div>
              ))}
            </div>

            <div className="shopn">
              <a href="#" className="shop-now">  {product.linkText} </a>
            </div>
          </div>
        ))}
      </div>
        <div className='amazgr'>
                <img src="../assets/Amgrid1.png" alt="Amgrid1" />
                <img src="../assets/Amgrid2.png" alt="Amgrid2" />
                <img src="../assets/Amgrid3.png" alt="Amgrid3" />
                <img src="../assets/Amgrid4.png" alt="Amgrid4" />
            </div>
    </>
  )
}
export default AmazGridBox