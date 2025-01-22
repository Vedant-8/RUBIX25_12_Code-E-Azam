import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography, TextField, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import projectsData from "../../assets/projects.json";

const UDashboard = () => { // Changed from Dashboard to UDashboard
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    setFilteredProjects(projectsData);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase())
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
    height: "220px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }));

  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(to right, #e8f5e9, #ffffff)" }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", py: 4 }}>
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
            "& .MuiOutlinedInput-root": { boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)" },
            "& .MuiInputLabel-root": { color: "green" },
          }}
        />
      </Box>

      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", px: 4, pb: 4 }}>
        <Grid container spacing={4} sx={{ maxWidth: "1200px" }}>
          {filteredProjects.map((project) => (
            <Grid key={project.id} item xs={12} sm={6} md={4}>
              <StyledCard onClick={() => navigate(`/project/${project.id}`)}>
                <CardContent
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5" sx={{ color: "green", fontWeight: "bold", mb: 2 }}>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "green", mb: 2 }}>
                    {project.description}
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: "center", pb: 2 }}>
                  <LocationOnIcon sx={{ color: "green", marginRight: "4px" }} />
                  <Typography variant="subtitle2" sx={{ color: "gray" }}>
                    {project.location}
                  </Typography>
                </Box>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default UDashboard; // Fixed the export
