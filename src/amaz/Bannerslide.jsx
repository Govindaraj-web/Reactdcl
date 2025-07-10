import React, { useState, useEffect, useCallback } from "react";
import "./ProductCards.css";

const images = [
    { src: "/img/imge1.jpg", link: "https://example.com/page1" },
    { src: "/img/imge2.jpg", link: "https://example.com/page2" },
    { src: "/img/imge3.jpg", link: "https://example.com/page3" },
    { src: "/img/imge4.jpg", link: "https://example.com/page4" },
    { src: "/img/imge5.jpg", link: "https://example.com/page5" },
    { src: "/img/imge6.jpg", link: "https://example.com/page6" },
    { src: "/img/imge.jpg", link: "https://example.com/home" },
];

function Bannerslide() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateImage = useCallback((index) => {
        setCurrentIndex((prevIndex) => (index + images.length) % images.length);
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className="bannerr">
            <button className="button prevv" onClick={() => updateImage(currentIndex - 1)}> &#8249; </button>

            <a href={images[currentIndex].link} target="_blank" rel="noopener noreferrer">
                <img id="slider-image" src={images[currentIndex].src} alt="Slider" />
            </a>

            <button className="button nextt" onClick={() => updateImage(currentIndex + 1)}> &#8250; </button>
        </div>

            <div className='amazgr'>
                <img src="../assets/banner1.png" alt="banner_slide" />
                <img src="../assets/banner2.png" alt="banner_slide" />
  
            </div>
        </>
    );
}

export default Bannerslide