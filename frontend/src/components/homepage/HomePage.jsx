// src/components/homepage/HomePage.jsx

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Navbar from "../shared/navbar";
import CoverCarousel from "./CoverCarousel";

const featuredGuitars = [
  {
    name: "Flame Maple Strat",
    image: "guitarCoverPhoto.png",
    description:
      "A handcrafted custom Strat-style guitar featuring a flamed maple top, roasted maple neck, and premium hand-wound pickups. Perfect for blues and rock enthusiasts.",
  },
  {
    name: "Vintage T-Style",
    image: "guitarCoverPhoto.png",
    description:
      "This Tele-inspired build offers aged nitro finish, brass saddles, and a classic ash body with twangy single coils for that authentic retro tone.",
  },
];

const featuredBasses = [
  {
    name: "Modern 5-String Bass",
    image: "guitarCoverPhoto.png",
    description:
      "Built for versatility and clarity, this 5-string custom bass features active electronics and a smooth satin finish neck for effortless playability.",
  },
  {
    name: "Classic Jazz Bass",
    image: "guitarCoverPhoto.png",
    description:
      "Inspired by the timeless '60s jazz bass feel, with hand-shaped contours and vintage-voiced pickups that deliver warmth and punch.",
  },
];

const HomePage = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{ backgroundColor: "#F4F2EA", color: "#333", overflowX: "hidden" }}
    >
      <Box
        sx={{ position: "relative", width: "100%", backgroundColor: "#000" }}
      >
        <Navbar />
        <CoverCarousel interval={5000} />
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "8%", md: "18%" },
            left: { xs: "5%", md: "10%" },
            color: "#fff",
            textAlign: "left",
            direction: "ltr",
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 1,
              fontSize: { xs: "1.5rem", md: "3rem" },
              fontFamily: "Arial, sans-serif",
              textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            }}
          >
            TETRO Custom Guitars
          </Typography>
          <Button
            component="a"
            href="#guitars-section"
            sx={{
              mt: 1,
              px: 3,
              py: 1,
              backgroundColor: "rgba(255,255,255,0.85)",
              color: "#000",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
              textDecoration: "none",
              borderRadius: 1,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.95)" },
            }}
          >
            Explore Guitars
          </Button>
        </Box>
      </Box>

      <Box
        id="guitars-section"
        component="section"
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 10 },
          backgroundColor: "#F4F2EA",
          direction: "ltr",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: { xs: 4, md: 6 },
              textAlign: "left",
              fontFamily: "Arial, sans-serif",
              color: "#333",
            }}
          >
            Featured Guitars
          </Typography>

          <Grid container rowSpacing={6} columnSpacing={6}>
            {featuredGuitars.map((guitar, idx) => (
              <Grid
                key={guitar.name}
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  gap: { xs: 2, md: 4 },
                }}
              >
                <Box
                  component="img"
                  src={guitar.image}
                  alt={guitar.name}
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    height: { xs: 200, md: 300 },
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    order: isMdUp ? (idx % 2 === 0 ? 1 : 2) : 1,
                  }}
                />

                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    order: isMdUp ? (idx % 2 === 0 ? 2 : 1) : 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      textAlign: "left",
                      fontFamily: "Arial, sans-serif",
                      color: "#6C4F3B",
                    }}
                  >
                    {guitar.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      textAlign: "left",
                      color: "#555",
                      lineHeight: 1.6,
                    }}
                  >
                    {guitar.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        id="basses-section"
        component="section"
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 10 },
          backgroundColor: "#FFFFFF",
          direction: "ltr",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: { xs: 4, md: 6 },
              textAlign: "left",
              fontFamily: "Arial, sans-serif",
              color: "#333",
            }}
          >
            Featured Basses
          </Typography>

          <Grid container rowSpacing={6} columnSpacing={6}>
            {featuredBasses.map((bass, idx) => (
              <Grid
                key={bass.name}
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  gap: { xs: 2, md: 4 },
                }}
              >
                <Box
                  component="img"
                  src={bass.image}
                  alt={bass.name}
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    height: { xs: 200, md: 300 },
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    order: isMdUp ? (idx % 2 === 0 ? 2 : 1) : 1,
                  }}
                />

                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    order: isMdUp ? (idx % 2 === 0 ? 1 : 2) : 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      textAlign: "left",
                      fontFamily: "Arial, sans-serif",
                      color: "#2E4057",
                    }}
                  >
                    {bass.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      textAlign: "left",
                      color: "#555",
                      lineHeight: 1.6,
                    }}
                  >
                    {bass.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
