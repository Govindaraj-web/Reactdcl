import React,{useRef} from 'react'
import './Amaz.css'
import { Link } from 'react-router-dom';


const products = [
  {
    title: "Additional items to explore",
    items: [
      { src: "../img/im1.png", link: "https://example.com/product1" },
      { src: "../img/im2.png", link: "https://example.com/product2" },
      { src: "../img/im3.png", link: "https://example.com/product3" },
      { src: "../img/im4.png", link: "https://example.com/product4" },
      { src: "../img/im5.png", link: "https://example.com/product5" },
      { src: "../img/im6.png", link: "https://example.com/product6" },
      { src: "../img/im7.png", link: "https://example.com/product7" },
      { src: "../img/im8.png", link: "https://example.com/product8" },
      { src: "../img/im9.png", link: "https://example.com/product9" },
      { src: "../img/im1.png", link: "https://example.com/product1" },
      { src: "../img/im2.png", link: "https://example.com/product2" },
      { src: "../img/im3.png", link: "https://example.com/product3" },
      { src: "../img/im4.png", link: "https://example.com/product4" },
      { src: "../img/im5.png", link: "https://example.com/product5" },
      { src: "../img/im6.png", link: "https://example.com/product6" },
      { src: "../img/im7.png", link: "https://example.com/product7" },
      { src: "../img/im8.png", link: "https://example.com/product8" },
      { src: "../img/im9.png", link: "https://example.com/product9" }
    ],
    linkText: "See more"
  },
  {
    title: "Related to items you've viewed",
    items: [
      { src: "../img/im10.png", link: "https://example.com/product10" },
      { src: "../img/im11.png", link: "https://example.com/product11" },
      { src: "../img/im12.png", link: "https://example.com/product12" },
      { src: "../img/im13.png", link: "https://example.com/product13" },
      { src: "../img/im14.png", link: "https://example.com/product14" },
      { src: "../img/im15.png", link: "https://example.com/product15" },
      { src: "../img/im16.png", link: "https://example.com/product16" },
      { src: "../img/im17.png", link: "https://example.com/product17" },
      { src: "../img/im10.png", link: "https://example.com/product10" },
      { src: "../img/im11.png", link: "https://example.com/product11" },
      { src: "../img/im12.png", link: "https://example.com/product12" },
      { src: "../img/im13.png", link: "https://example.com/product13" },
      { src: "../img/im14.png", link: "https://example.com/product14" },
      { src: "../img/im15.png", link: "https://example.com/product15" },
      { src: "../img/im16.png", link: "https://example.com/product16" },
      { src: "../img/im17.png", link: "https://example.com/product17" }
    ],
    linkText: "See more"
  }
];

const Carousel = ({ images }) => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -600 : 600;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-container">
      <button id='bts' className="button prev" onClick={() => scrollCarousel("left")}>
        &#8249;
      </button>

      <div className="carousel" ref={carouselRef}>
        {images.map((item, index) => (
          <div className="itemm" key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt={`item-${index}`} />
            </a>
          </div>
        ))}
      </div>

      <button id='bts'  className="button next" onClick={() => scrollCarousel("right")}>
        &#8250;
      </button>
    </div>
  );
};
function AmazScrollbar() {
  return (
    <>
 <Link to='/'>Home</Link>
     <div>
      {products.map((product, index) => (
        <div className="bann" key={index}>
          <div className="banner">
            <h1>{product.title}</h1>
            <a href="#">{product.linkText}</a>
          </div>
          <Carousel images={product.items} />
        </div>
      ))}
    </div>
    </>
  )
}

export default AmazScrollbar