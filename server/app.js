const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const routes = require("./routes/note.routes");

const app = express();
const port = process.env.PORT ?? 5000;

app.use(cors());
app.use(express.json({ extended: true }));
app.use("/api/note", routes);

async function start() {
  try {
    await mongoose.connect(`mongodb://mongodb:27017/notes`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected");
    app.listen(
      port,
      console.log.bind(console, `Server has been started on port ${port}`)
    );
  } catch (e) {
    console.log(e);
  }
}

start();
