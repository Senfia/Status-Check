const express = require("express");
const path = require("path");
const app = express();

// Serve the React build folder
app.use(express.static(path.join(__dirname, "/build")));

// Define API routes or other backend logic here

// For any other routes, serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
