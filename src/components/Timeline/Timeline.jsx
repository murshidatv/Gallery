

import React from "react";
import { motion } from "framer-motion";
import "./Timeline.css";
const timelineData = [
  {
    title: "Nikah",
    description: "Where it all began. A beautiful moment that sparked a journey of love💑",
    image: "/images/nikah.png",
    emoji: "😍"
  },
  {
    title: "First Trip",
    description: "Explored new places together and made unforgettable memories💕",
    image: "/images/qtr.png",
    emoji: "😎"
  },
  
  {
    title: "Far away",
    description: "A promise of forever, sealed with love and joy✨",
    image: "/images/far.png",
    emoji: "🤗"
  },
  {
    title: "Fun",
    description: "Behind every perfect couple photo, there's this moment! 🤪",
    image: "/images/fun.png",
    emoji: "😁"
    
  },
   {
    title: "Mirror",
    description: "Reflections of love and laughter💑",
    image: "/images/mirror.png",
    emoji: "😇"
  },
  {
    title: "Wedding Day",
    description: "The most magical day when two hearts became one😍",
    image: "/images/wed2.jpg",
    emoji: "🫶"
  }
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-heading">📸 Captured Moments</h2>
      <div className="timeline-cards">
        
        {timelineData.map((event, index) => (
          <motion.div
            className="timeline-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img src={event.image} alt={event.title} className="timeline-img" />
            
            <span className="timeline-emoji">{event.emoji}</span>
            <p>{event.description}</p>
          </motion.div>
        ))}
        
       
      </div>
    </div>
  );
};

export default Timeline;
