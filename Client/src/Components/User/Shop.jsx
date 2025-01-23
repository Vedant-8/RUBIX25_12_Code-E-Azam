import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import productsData from "../../assets/shop.json";
import Navbar from "./Navbar";
import Footer from "../Footer";

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 20px rgba(144, 238, 144, 0.5)", // Light green box shadow
  },
  backgroundColor: "#f7f9fc",
  borderRadius: "12px",
  overflow: "hidden",
  padding: "16px",
  cursor: "pointer",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "8px",
  textTransform: "none",
  fontWeight: "bold",
  backgroundColor: "green",
  color: "white",
  "&:hover": {
    backgroundColor: "#228b22",
  },
}));

const Shop = () => {
  const [searchText, setSearchText] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts = productsData.products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #d4edda, #ffffff)", // Light green and white gradient
          py: 4,
          px: 2,
        }}
      >
        {/* Top Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end", // Align cart button to the right
            alignItems: "center",
            mb: 4,
            px: 2,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#32cd32",
              color: "white",
              fontSize: "1.5rem",
              "&:hover": { backgroundColor: "#228b22" },
              padding: "12px",
            }}
          >
            <ShoppingCartIcon />
            Cart
          </IconButton>
          <Typography
            sx={{
              ml: 1,
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "#32cd32",
            }}
          >
            {cartItems.length}
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <TextField
            label="Search products..."
            variant="outlined"
            fullWidth
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            sx={{
              maxWidth: "600px",
              mx: 2,
              "& .MuiOutlinedInput-root": {
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
              },
            }}
          />
        </Box>

        {/* Product Grid */}
        <Grid container spacing={4} sx={{ px: 4 }}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <StyledCard>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      textAlign: "center",
                      color: "green",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "gray", textAlign: "center", mb: 2 }}
                  >
                    {product.category}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: "green",
                      textAlign: "center",
                      mb: 3,
                    }}
                  >
                    ₹{product.price.toFixed(2)}
                  </Typography>
                  <StyledButton
                    variant="contained"
                    fullWidth
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </StyledButton>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Shop;
