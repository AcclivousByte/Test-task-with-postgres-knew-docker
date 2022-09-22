// const path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
//BodyParser Middleware
var multer = require("multer");
var upload = multer();
const dbConnection = require("./database/db");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// For multi form data
app.use(upload.array());
const port = 3000;
//Routes Configuration
var user_routes = require("./routes/article_routes");
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api/article", user_routes);
dbConnection();

app.listen(port, () => {
  console.log("Server is running at port 3000");
});
