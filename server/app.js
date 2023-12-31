const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./connection");
routes = require("./routes/routes");
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use(routes);
app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
