import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button, Grid, List, ListItem, Card, CardContent } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import projectsData from "../../assets/projects.json";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === id);

  if (!project) {
    return <Typography variant="h4">Project not found</Typography>;
  }

  // Realistic data for the graph with more data points
  const chartData = [
    { month: "Jan", impact: 200 },
    { month: "Feb", impact: 110 },
    { month: "Mar", impact: 170 },
    { month: "Apr", impact: 40 },
    { month: "May", impact: 60 },
    { month: "Jun", impact: 90 },
    { month: "Jul", impact: 100 },
    { month: "Aug", impact: 185 },
    { month: "Sep", impact: 140 },
    { month: "Oct", impact: 130 },
    { month: "Nov", impact: 150 },
    { month: "Dec", impact: 160 },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {/* Section 1: Project Name and Description */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 2 }}>
            <CardContent>
              <Typography variant="h3" sx={{ color: "green", fontWeight: "bold", mb: 2 }}>
                {project.name}
              </Typography>
              <Typography variant="h4" sx={{ mb: 2, color: "#757575", fontSize: "1.3rem" }}>
                <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                  {project.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Section 2: Funding Goals, Received, and Graph */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 2 }}>
            <CardContent>
              {/* Funding Buttons */}
              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#e8f5e9",
                    color: "green",
                    borderRadius: "20px",
                    px: 2,
                    "&:hover": { backgroundColor: "#c8e6c9" },
                  }}
                >
                  Funding Goal: ${project.funding_goal}
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#e8f5e9",
                    color: "green",
                    borderRadius: "20px",
                    px: 2,
                    "&:hover": { backgroundColor: "#c8e6c9" },
                  }}
                >
                  Funding Received: ${project.funding_received}
                </Button>
              </Box>

              {/* Graph */}
              <Typography variant="h5" sx={{ textAlign: "center", mb: 2, color: "green" }}>
                Project Impact
              </Typography>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="impact"
                    stroke="green"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                    animationDuration={1500}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Section 3: Social Media Buttons and Video Link */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 2 }}>
            <CardContent>
              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  startIcon={<XIcon />}
                  sx={{
                    backgroundColor: "#1DA1F2",
                    color: "#fff",
                    borderRadius: "20px",
                    "&:hover": { backgroundColor: "#0d8ae6" },
                  }}
                >
                  Twitter
                </Button>
                <Button
                  variant="contained"
                  startIcon={<YouTubeIcon />}
                  sx={{
                    backgroundColor: "red",
                    color: "#fff",
                    borderRadius: "20px",
                    "&:hover": { backgroundColor: "#cc0000" },
                  }}
                >
                  YouTube Video
                </Button>
              </Box>

              {/* Video Link in a Card */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <iframe
                  title="YouTube Video"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/HPJKxAhLw5I"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    borderRadius: "12px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                ></iframe>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Section 5: Updates */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 2 }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: "green", mb: 2 }}>
                Updates
              </Typography>
              <List>
                {project.updates.map((update, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      backgroundColor: "#e8f5e9",
                      mb: 2,
                      borderRadius: "10px",
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: "bold", color: "green", mb: 1 }}>
                      {update.date}
                    </Typography>
                    <Typography>{update.description}</Typography>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectDetail;
