const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// const Contact = require("./routes/Contact");


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


//Routes
// app.use("/contact", Contact);


app.get("/", (req, res) => {
  res.send("Backend server is running");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});

module.exports = app;