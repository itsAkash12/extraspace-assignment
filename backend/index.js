require("dotenv").config();
const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors())
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("This is from Backend");
});

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
