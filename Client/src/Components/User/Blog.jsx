import React, { useState } from "react";
import blogsData from "../../assets/blogs.json";
import {
  Modal,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import Navbar from "./Navbar";
import Footer from "../Footer";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #d4edda, #ffffff)", // Light green gradient
          py: 4,
          px: 2,
        }}
      >

        {/* Blog Cards Grid */}
        <Grid container spacing={4} sx={{ px: 4 }}>
          {blogsData.blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <Card
                sx={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 20px rgba(144, 238, 144, 0.5)", // Light green box shadow
                  },
                  cursor: "pointer",
                  backgroundColor: "#f7f9fc",
                  borderRadius: "12px",
                  padding: "16px",
                }}
                onClick={() => setSelectedBlog(blog)}
              >
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
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "gray", textAlign: "center" }}
                  >
                    {blog.category}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Detailed Blog View (Modal) */}
        <Modal
          open={!!selectedBlog}
          onClose={() => setSelectedBlog(null)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              p: 4,
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              maxWidth: "600px",
              width: "100%",
            }}
          >
            {selectedBlog && (
              <>
                <Typography
                  variant="caption"
                  sx={{
                    backgroundColor: "#32cd32",
                    color: "white",
                    px: 2,
                    py: 1,
                    borderRadius: "8px",
                    display: "inline-block",
                    mb: 2,
                  }}
                >
                  {selectedBlog.category}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "green",
                  }}
                >
                  {selectedBlog.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "gray", mb: 2 }}
                >
                  by {selectedBlog.author} - {selectedBlog.date}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "black", lineHeight: "1.6" }}
                >
                  {selectedBlog.content}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "gray", mt: 3, display: "block" }}
                >
                  {selectedBlog.wordCount} words
                </Typography>
              </>
            )}
          </Box>
        </Modal>
      </Box>
      <Footer />
    </>
  );
};

export default Blog;
