import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css"; 

import wed2 from "/images/wed2.jpg";
import wed3 from "/images/wed3.jpg";


const images = [
  { src: wed3}, 
  { src: wed2}, 
  { src: wed3}
 
];

export default function Gallery() {
  const [sel, setSel] = useState(0);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } },
  };

  const captionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
  };

  return (
    <div className="gallery-container">
      <div className="main-image-container">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[sel].src}
            src={images[sel].src}
            alt="Wedding"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={imageVariants}
            className="main-image"
          />
        </AnimatePresence>
        <motion.p
          key={images[sel].caption}
          variants={captionVariants}
          initial="hidden"
          animate="visible"
          className="caption"
        >
          {images[sel].caption}
        </motion.p>
      </div>

      <div className="thumbnail-container">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img.src}
            alt={`thumb-${i}`}
            className={`thumbnail ${i === sel ? "active" : ""}`}
            whileTap={{ scale: 1.1 }}
            onClick={() => setSel(i)}
          />
        ))}
      </div>
    </div>
  );
}
