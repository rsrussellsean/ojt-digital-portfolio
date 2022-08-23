import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import images from "../../images";
import "./style.scss";
// import image1 from "../../../public/images/1.png"

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  // 21760 1352
  return (
    <section className="appendix" data-scroll-section>
    <h1 className="carousel-h1">APPENDIX</h1>
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image, index) => {
            return (
              <motion.div className="item" key={index}>
                <img src={image} alt="image"></img>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Carousel;
