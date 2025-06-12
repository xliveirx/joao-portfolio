import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};


export const TypingEffect = ({ 
  text, 
  speed = 150,        // velocidade de digitar/apagar (ms por letra)
  pauseTime = 1000,   // pausa no fim da digitação antes de apagar
  className = "" 
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index <= text.length) {
      // digitando
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index));
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index >= 0) {
      // apagando
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index));
        setIndex(index - 1);
      }, speed);
    }

    if (index === text.length + 1 && !isDeleting) {
      // pausa antes de apagar
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    }

    if (index === -1 && isDeleting) {
      // pausa antes de digitar novamente
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex(0);
      }, pauseTime);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, pauseTime]);

  return (
    <motion.span
      className={className}
      style={{ whiteSpace: "pre" }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        style={{ display: "inline-block" }}
      >
        |
      </motion.span>
    </motion.span>
  );
};