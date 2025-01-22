import React, { useState, useEffect } from "react";
import { Grid, Card, Typography, TextField, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import projectsData from "../../assets/projects.json";
import Navbar from "./Navbar";
import Footer from "../Footer";

const UDashboard = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const calculateFundingPercentage = (projects) => {
      return projects.map((project) => ({
        ...project,
        funding_received_percentage: Math.min(
          (project.funding_received / project.funding_goal) * 100,
          100 // Ensure it doesn't exceed 100%
        ),
      }));
    };

    // Set initial projects with calculated percentages
    setFilteredProjects(calculateFundingPercentage(projectsData));
  }, []);

  useEffect(() => {
    const calculateFundingPercentage = (projects) => {
      return projects.map((project) => ({
        ...project,
        funding_received_percentage: Math.min(
          (project.funding_received / project.funding_goal) * 100,
          100
        ),
      }));
    };

    if (searchTerm.trim() === "") {
      setFilteredProjects(calculateFundingPercentage(projectsData));
    } else {
      setFilteredProjects(
        calculateFundingPercentage(
          projectsData.filter((project) =>
            project.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      );
    }
  }, [searchTerm]);

  const StyledCard = styled(Card)(({ theme }) => ({
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    },
    backgroundColor: "#e6f9e6",
    borderRadius: "12px",
    overflow: "hidden",
    height: "320px", // Adjusted for larger image
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "16px",
    cursor: "pointer", // Add pointer cursor for clickable effect
  }));

  const handleCardClick = (id) => {
    navigate(`/user/project/${id}`); // Navigate to the project detail page with the project ID
  };

  return (
    <>
    <Navbar />
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #e8f5e9, #ffffff)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 4,
        }}
      >
        <TextField
          variant="outlined"
          label="Search Projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            mb: 4,
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            width: "80%",
            maxWidth: "500px",
            "& .MuiOutlinedInput-root": {
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            },
            "& .MuiInputLabel-root": { color: "green" },
          }}
        />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          px: 4,
          pb: 4,
        }}
      >
        <Grid container spacing={4} sx={{ maxWidth: "1200px" }}>
          {filteredProjects.map((project) => (
            <Grid key={project.id} item xs={12} sm={6} md={4}>
              <StyledCard onClick={() => handleCardClick(project.id)}>
                {/* Updated Image Placeholder Size */}
                <Box
                  sx={{
                    height: "180px", // Increased size
                    backgroundColor: "#f0f0f0",
                    borderRadius: "12px",
                    marginBottom: "12px", // Adjusted spacing
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    Image Placeholder
                  </Typography>
                </Box>
                {/* Location with Icon */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <LocationOnIcon
                    sx={{ color: "gray", marginRight: "4px", fontSize: "1rem" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "right",
                      color: "gray",
                      fontSize: "0.9rem",
                    }}
                  >
                    {project.location}
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: "8px",
                  }}
                >
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "gray",
                    textAlign: "center",
                    marginBottom: "8px",
                  }}
                >
                  {project.short_description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", color: "green" }}
                  >
                    Goal: ₹{project.funding_goal}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "gray",
                      textAlign: "right",
                    }}
                  >
                    {`${project.funding_received_percentage.toFixed(
                      0
                    )}% completed`}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "6px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "3px",
                    overflow: "hidden",
                    marginBottom: "12px",
                  }}
                >
                  <Box
                    sx={{
                      width: `${project.funding_received_percentage}%`,
                      backgroundColor: "green",
                      height: "100%",
                    }}
                  ></Box>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <button
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Donate
                  </button>
                </Box>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    <Footer />
    </>
  );
};

export default UDashboard;
