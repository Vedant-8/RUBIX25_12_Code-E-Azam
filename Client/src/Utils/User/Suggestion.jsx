import React, { useState } from "react";
import projectsData from "../../assets/projects.json";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Navbar from "../../Components/User/Navbar";
import Footer from "../../Components/Footer";
import { Grid, Card, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Suggestion = () => {
  const [budget, setBudget] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSuggestions = async () => {
    if (!budget || isNaN(budget) || budget <= 0) {
      alert("Please enter a valid donation budget.");
      return;
    }

    try {
      setLoading(true);

      // Initialize the Gemini API client
      const genAI = new GoogleGenerativeAI("");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Generate the prompt dynamically based on the user's budget and the projects data
      const prompt = `
        I have a donation budget of ₹${budget}. Just write the names of projects, no reason nothing else just names of projects from the following list that would benefit the most from a donation, considering their funding goals, current funding received, and their impact areas such as CO2 reduction, trees planted, or water saved:
        ${projectsData
          .map(
            (project) =>
              `- ${project.name}: ${project.short_description} (Goal: ₹${project.funding_goal}, Received: ₹${project.funding_received})`
          )
          .join("\n")}
      `;

      // Log the prompt to debug
      console.log("Generated prompt:", prompt);

      // Get the response from the model
      const result = await model.generateContent(prompt);

      // Log the raw response to debug
      const responseText = await result.response.text();
      console.log("AI Response:", responseText);

      // Parse the response to get the suggested project names
      const suggestedProjectNames = responseText
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line);

      // Filter the projectsData based on the suggested names
      const filteredProjects = projectsData.filter((project) =>
        suggestedProjectNames.some((name) => project.name.includes(name))
      );

      setSuggestions(filteredProjects);
    } catch (error) {
      console.error("Error generating suggestions:", error);
      alert("Failed to generate suggestions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Styled card for each project (same style as in UDashboard)
  const StyledCard = styled(Card)(({ theme }) => ({
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    },
    backgroundColor: "#e6f9e6",
    borderRadius: "12px",
    overflow: "hidden",
    height: "380px", // Increased height for better look
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "16px",
    cursor: "pointer",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Added subtle shadow for better appearance
  }));

  return (
    <>
      <Navbar />
      <div className="p-6 flex justify-center items-center">
        <div className="w-full max-w-md">
          <Typography variant="h5" className="text-center mb-4">
            Donation Suggestion Bot
          </Typography>

          <input
            type="number"
            placeholder="Enter your donation budget (₹)"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full p-3 rounded-xl border-none text-green-600 mb-4"
          />

          <button
            onClick={fetchSuggestions}
            disabled={loading}
            className="w-full p-3 rounded-xl bg-green-600 text-white mb-4"
          >
            {loading ? "Generating Suggestions..." : "Generate Suggestions"}
          </button>

          {suggestions.length > 0 && (
            <div className="mt-6">
              <Typography
                variant="h6"
                className="text-center mb-4 text-green-600"
              >
                Suggested Projects to Donate:
              </Typography>

              <Grid container spacing={4}>
                {suggestions.map((project) => (
                  <Grid key={project.id} item xs={12} sm={6} md={4} lg={3}>
                    <StyledCard>
                      <Box
                        sx={{
                          height: "200px", // Increased image placeholder height
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
                      </Box>
                    </StyledCard>
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Suggestion;
