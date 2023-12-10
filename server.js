const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./data/connectToDb");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8001;
app.use(express.json());

connectDb();
app.use(cors());

// import routes
const userRoutes = require("./routes/userRoutes");

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
