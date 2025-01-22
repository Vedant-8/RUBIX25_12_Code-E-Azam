import React, { useState, useEffect } from "react";
import { Grid, Card, Typography, TextField, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import projectsData from "../../assets/projects.json";
import Snackbar from "@mui/material/Snackbar";
import Navbar from "./Navbar";
import Footer from "../Footer";

const Volunteer = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    hoursAvailable: "",
  });
  const [snackbarMessage, setSnackbarMessage] = useState("");

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
    height: "320px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "16px",
    cursor: "pointer",
  }));

  const handleVolunteerClick = (project) => {
    setSelectedProject(project);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVolunteerForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSnackbarMessage(`Your volunteer form for ${selectedProject.name} is submitted!`);
    setShowForm(false);
    setVolunteerForm({ name: "", email: "", phone: "", hoursAvailable: "" });
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
            project.volunteer_requirement && (
              <Grid key={project.id} item xs={12} sm={6} md={4}>
                <StyledCard>
                  <Box
                    sx={{
                      height: "180px",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "12px",
                      marginBottom: "12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      Image Placeholder
                    </Typography>
                  </Box>

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
                      onClick={() => handleVolunteerClick(project)}
                    >
                      Volunteer
                    </button>
                  </Box>
                </StyledCard>
              </Grid>
            )
          ))}
        </Grid>
      </Box>

      {/* Volunteer Form */}
      {showForm && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "500px",
              width: "100%",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: "16px" }}>
              Volunteer for {selectedProject.name}
            </Typography>

            <form onSubmit={handleSubmitForm}>
              <TextField
                label="Name"
                name="name"
                value={volunteerForm.name}
                onChange={handleInputChange}
                fullWidth
                required
                sx={{ marginBottom: "12px" }}
              />
              <TextField
                label="Email"
                name="email"
                value={volunteerForm.email}
                onChange={handleInputChange}
                fullWidth
                required
                sx={{ marginBottom: "12px" }}
              />
              <TextField
                label="Phone"
                name="phone"
                value={volunteerForm.phone}
                onChange={handleInputChange}
                fullWidth
                required
                sx={{ marginBottom: "12px" }}
              />
              <TextField
                label="Hours Available"
                name="hoursAvailable"
                type="number"
                value={volunteerForm.hoursAvailable}
                onChange={handleInputChange}
                fullWidth
                required
                sx={{ marginBottom: "12px" }}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{
                    backgroundColor: "lightcoral",  // Light red color
                    color: "#fff",
                    padding: "8px 16px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "8px 16px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              </Box>
            </form>
          </Box>
        </Box>
      )}

      {/* Snackbar */}
      {snackbarMessage && (
        <Snackbar
          open={true}
          autoHideDuration={3000}
          onClose={() => setSnackbarMessage("")}
          message={snackbarMessage}
          sx={{ backgroundColor: "#a8e6a0" }} // Light green color for snackbar
        />
      )}
    </Box>
    <Footer />
    </>
  );
};

export default Volunteer;
