/*import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SurpriseBox.css";
import surpriseImg from "/images/surprisebox.jpeg"; 
import surpriseVideo from "/videos/surprise-video.mp4"; 

const SurpriseBox = () => {
  const [open, setOpen] = useState(false);

  return (
    
    <div className="surprise-wrapper">
      <p className="hint-text">  🎁 Click here for a BIG Surprise!</p>
      <motion.img
        src={surpriseImg}
        alt="Surprise Box"
        className="surprise-box"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              
            >
              <video
                src={surpriseVideo}
                controls
                autoPlay
                className="surprise-video"
              />
              <div className="modal-message">
              <h2>Best Wishes from KM Family 💐</h2>
              <p>May your journey together be filled with endless joy, love, and laughter.</p>
              </div>
              <button className="close-btn" onClick={() => setOpen(false)}>
                ✖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  
    </div>
  );
};

export default SurpriseBox;
*/
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SurpriseBox.css";
import surpriseVideo from "/videos/surprise-video.mp4";

const SurpriseBox = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="surprise-wrapper">
      <p className="hint-text">🎁 Click the Box Below for a BIG Surprise!</p>

      <motion.button
        className="surprise-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
      >
        Open Surprise 🎉
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={surpriseVideo}
                controls
                autoPlay
                className="surprise-video"
              />
              <div className="modal-message">
                <h2>Best Wishes from KM Family 💐</h2>
                <p>May your journey together be filled with endless joy, love, and laughter.</p>
              </div>
              <button className="close-btn" onClick={() => setOpen(false)}>
                ✖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SurpriseBox;
