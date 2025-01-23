import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Navbar from "../../Components/Organization/Navbar";
import Footer from "../../Components/Footer";
import { Card, Typography, Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CostEstimation = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    projectScope: "",
    duration: "",
    targetAudience: "",
    additionalNotes: "",
  });
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchEstimation = async () => {
    const { projectName, projectScope, duration, targetAudience, additionalNotes } = formData;

    if (!projectName || !projectScope || !duration || !targetAudience) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      setLoading(true);

      // Initialize the Gemini API client
      const genAI = new GoogleGenerativeAI("");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Generate the prompt dynamically based on user input
      const prompt = `
        Estimate the total cost and provide a detailed cost breakdown for the following project:
        - Project Name: ${projectName}
        - Scope: ${projectScope}
        - Expected Duration: ${duration}
        - Target Audience: ${targetAudience}
        ${additionalNotes ? `- Additional Notes: ${additionalNotes}` : ""}
        Include key cost elements such as:
        - Infrastructure costs
        - Operational costs
        - Resource requirements
        - Miscellaneous expenses
      `;

      console.log("Generated prompt:", prompt);

      // Get the response from the AI model
      const result = await model.generateContent(prompt);
      const responseText = await result.response.text();

      console.log("AI Response:", responseText);

      setResponse(responseText);
    } catch (error) {
      console.error("Error generating estimation:", error);
      alert("Failed to generate estimation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Styled card for displaying the response
  const StyledCard = styled(Card)(({ theme }) => ({
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    },
    backgroundColor: "#e6f9e6",
    borderRadius: "12px",
    overflow: "hidden",
    height: "auto",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  }));

  return (
    <>
      <Navbar />
      <div className="p-6 flex justify-center items-center">
        <div className="w-full max-w-lg">
          <Typography variant="h5" className="text-center mb-4">
            Cost Estimation AI Bot
          </Typography>

          <form className="mb-4">
            <TextField
              fullWidth
              label="Project Name"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Project Scope"
              name="projectScope"
              value={formData.projectScope}
              onChange={handleInputChange}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Expected Duration (e.g., 6 months)"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Target Audience (e.g., 500 students)"
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleInputChange}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Additional Notes (Optional)"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleInputChange}
              margin="normal"
              multiline
              rows={3}
            />
          </form>

          <Button
            onClick={fetchEstimation}
            disabled={loading}
            fullWidth
            variant="contained"
            color="success"
          >
            {loading ? "Generating Estimation..." : "Get Cost Estimation"}
          </Button>

          {response && (
            <div className="mt-6">
              <StyledCard>
                <Typography variant="h6" className="text-center mb-4 text-green-600">
                  Cost Estimation:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "justify", whiteSpace: "pre-line" }}
                >
                  {response}
                </Typography>
              </StyledCard>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CostEstimation;
