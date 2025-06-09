// src/components/homepage/CoverCarousel.jsx

import React, { useState, useEffect, useRef } from "react";
import { Box, Fade, Typography } from "@mui/material";

const coverImages = ["/guitarCoverPhoto.png", "/coverPhoto2.png", "/yoga4.png"];
const overlayTexts = ["Build Your Dream Guitar", "Crafted for Your Sound"];

const CoverCarousel = ({ interval = 5000 }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingTimeoutRef = useRef(null);
  const carouselIntervalRef = useRef(null);

  useEffect(() => {
    if (coverImages.length < 2) return;

    carouselIntervalRef.current = setInterval(() => {
      setShowImage(false);
      setTimeout(() => {
        setImageIndex((prev) => (prev + 1) % coverImages.length);
        setShowImage(true);
      }, 600);
    }, interval);

    return () => {
      clearInterval(carouselIntervalRef.current);
    };
  }, [interval]);

  useEffect(() => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    const currentText = overlayTexts[textIndex % overlayTexts.length];
    const typingSpeed = 130;
    const deletingSpeed = 60;
    const pauseAfterWrite = 2500;
    const pauseAfterDelete = 400;

    if (!isDeleting && displayedText.length < currentText.length) {
      typingTimeoutRef.current = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      typingTimeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterWrite);
    } else if (isDeleting && displayedText.length > 0) {
      typingTimeoutRef.current = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      typingTimeoutRef.current = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => prev + 1);
      }, pauseAfterDelete);
    }

    return () => {
      clearTimeout(typingTimeoutRef.current);
    };
  }, [displayedText, isDeleting, textIndex]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "250px", md: "500px" },
        overflow: "hidden",
      }}
    >
      {coverImages.map((url, idx) => (
        <Fade
          key={idx}
          in={idx === imageIndex && showImage}
          timeout={{ enter: 600, exit: 600 }}
        >
          <Box
            component="img"
            src={url}
            alt={`Slide ${idx + 1}`}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Fade>
      ))}

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          color: "#EDC988",
          textAlign: "left",
          direction: "ltr",
          pl: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 900,
            fontSize: { xs: "1.5rem", md: "3rem" },
            minHeight: { xs: "2rem", md: "4rem" },
            lineHeight: 1.1,
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            whiteSpace: "nowrap",
          }}
        >
          {displayedText}
          <Box
            component="span"
            sx={{
              display: "inline-block",
              width: "2px",
              backgroundColor: "#CD5656",
              marginLeft: "5px",
              animation: "blink 1s steps(2, start) infinite",
            }}
          />
        </Typography>
      </Box>

      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
};

export default CoverCarousel;
