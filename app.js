const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const History = require("./models/history");

mongoose
  .connect("mongodb://localhost/ra-challenge", {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to database`))
  .catch((err) => console.error(err));

const app = express();

// CORS MIDDLEWARE SETUP
app.use(
  cors({
    origin: "http://localhost:8001",
    credentials: true,
  })
);
//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.get("/history", async (req, res) => {
  try {
    const historyArr = await History.find().sort("-created_at"); //Return history with latest first
    res.json(historyArr);
  } catch (error) {
    console.log("error in GET", err); //TODO: Better error handling
  }
});

app.post("/history", async (req, res) => {
  try {
    const { title, videoId, author } = req.body;
    await History.create({
      title,
      videoId,
      author,
    });
    res.status(200).json();
  } catch (error) {
    console.log("error in POST", error);
  }
});

// 404
// catch 404 and forward to error handler
app.use((req, res, next) => {
  console.log("404 not found");
  res.status(404).json({ code: "not found" });
});

// ERROR HANDLING
app.use((err, req, res, next) => {
  // always log the error
  console.error("ERROR", req.method, req.path, err);

  // only send the error if the error ocurred before sending the response
  // (don't try to send the response after it has already been sent)
  if (!res.headersSent) {
    const statusError = err.status || "500";
    res.status(statusError).json(err);
  }
});

app.listen(8000, () => console.log("Server is running on port 8000"));
