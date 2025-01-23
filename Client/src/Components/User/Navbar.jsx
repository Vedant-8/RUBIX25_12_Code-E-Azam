import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Navbar = () => {
  const navigate = useNavigate();

  // Styled Navigation Button
  const NavButton = styled("button")(({ theme }) => ({
    backgroundColor: "#ffffff", // White background
    color: "#007f3f", // Green text
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "500",
    padding: "0.5rem 1.5rem",
    borderRadius: "0.5rem",
    transition: "all 0.3s ease-in-out",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#e6f9e6", // Light green on hover
      color: "#005f2f", // Darker green text on hover
      transform: "scale(1.1)", // Slight scaling effect
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
    },
  }));

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#ffffff", // White background
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Light shadow
      }}
    >
      <Toolbar className="flex justify-between items-center">
        {/* Website Name */}
        <Box
          className="cursor-pointer"
          onClick={() => navigate("/user")}
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#007f3f", // Green color for the website name
          }}
        >
          Samuhik Sankalpa
        </Box>

        {/* Navigation Buttons */}
        <Box className="flex gap-4">
          <NavButton onClick={() => navigate("/user/shop")}>Shop</NavButton>
          <NavButton onClick={() => navigate("/user/volunteer")}>Volunteer</NavButton>
          <NavButton onClick={() => navigate("/user/rewards")}>Rewards</NavButton>
          <NavButton onClick={() => navigate("/user/suggestion")}>AI suggestion for Donation</NavButton>
          <NavButton onClick={() => navigate("/user/educational")}>
            Educational
          </NavButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
