// src/components/shared/Footer.jsx

import React from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#141414",
        color: "#E0E0E0",
        pt: 4,
        pb: 2,
        px: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "auto auto auto",
          },
          gap: { xs: 0.5, md: 0 },
          mb: 1,
          direction: "ltr",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", direction: "ltr" }}
        >
          <Typography variant="subtitle1" sx={titleStyle}>
            About TETRO
          </Typography>
          <Link href="/about" underline="none" sx={linkStyle}>
            Our Story
          </Link>
          <Link href="/custom-shop" underline="none" sx={linkStyle}>
            Custom Shop
          </Link>
          <Link href="/workshop" underline="none" sx={linkStyle}>
            Craftsmanship
          </Link>
          <Box sx={{ display: "flex", gap: 0.5, mt: 1 }}>
            <IconButton
              size="small"
              sx={iconStyle}
              href="https://www.facebook.com/tetroguitars"
              target="_blank"
              rel="noopener"
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={iconStyle}
              href="https://www.instagram.com/tetroguitars"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={iconStyle}
              href="https://www.youtube.com/@tetroguitars"
              target="_blank"
              rel="noopener"
            >
              <YouTubeIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={iconStyle} href="/contact">
              <EmailIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: "column", direction: "ltr" }}
        >
          <Typography variant="subtitle1" sx={titleStyle}>
            Categories
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            Electric Guitars
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            Custom Basses
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            Pickups
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            Hardware & Parts
          </Typography>
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: "column", direction: "ltr" }}
        >
          <Typography variant="subtitle1" sx={titleStyle}>
            Support
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            Warranty & Repairs
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            Shipping & Returns
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            FAQs
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            Contact Us
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          borderTop: "1px solid #333",
          mt: 0,
          pt: 2,
          textAlign: "center",
          direction: "ltr",
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#757575", fontFamily: "Nunito, Arial, sans-serif" }}
        >
          © 2025 TETRO Custom Guitars. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

const titleStyle = {
  fontWeight: 600,
  mb: 0,
  pb: 0,
  pt: 0,
  color: "#fff",
  fontFamily: "Nunito, Arial, sans-serif",
  fontSize: "1rem",
  lineHeight: 1.2,
};

const linkStyle = {
  mb: 0,
  color: "#E0E0E0",
  fontFamily: "Nunito, Arial, sans-serif",
  fontSize: "0.875rem",
  lineHeight: 1.2,
  p: 0,
  "&:hover": {
    color: "#fff",
    textDecoration: "underline",
  },
};

const textStyle = {
  mb: 0,
  color: "#E0E0E0",
  fontFamily: "Nunito, Arial, sans-serif",
  fontSize: "0.875rem",
  lineHeight: 1.2,
};

const iconStyle = {
  color: "#fff",
  p: 0,
  m: 0,
};

export default Footer;
