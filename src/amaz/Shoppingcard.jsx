import { useState } from "react";
import "./ProductCards.css";

function Shoppingcard() {
  const [mainImage, setMainImage] = useState("/img/imgg1.png");
  const [selected, setSelected] = useState(0);

  const images = [
    {src:"/img/imgg5.png",full:"/img/imgg1.png",link:"https://example.com/product1"},
    {src:"/img/imgg6.png",full:"/img/imgg2.png",link:"https://example.com/product2"},
    {src:"/img/imgg7.png",full:"/img/imgg3.png",link:"https://example.com/product3"},
    {src:"/img/imgg8.png",full:"/img/imgg4.png",link:"https://example.com/product1"}
  ];

  const changeImage = (index) => {
    setMainImage(images[index].full);
    setSelected(index);
  };

  return (
    <>
    <div className="cardd">
      <h3>Keep shopping for</h3>
      <a href={images[selected].link} target="_blank" rel="noopener noreferrer">
        <img id="mainImage" src={mainImage} alt="Product" />
      </a>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={`thumbnail ${selected === index ? "selected" : ""}`}
            src={image.src}
            alt="Thumbnail"
            onClick={() => changeImage(index)}
          />
        ))}
      </div>
    </div>
      <div className='amazgr'>
                <img src="../assets/Shopcard1.png" alt="shopping_cart" />
                <img src="../assets/Shopcard2.png" alt="shopping_cart" />
               
  
            </div>
            </>
  );
}

export default Shoppingcard