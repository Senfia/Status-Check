const express = require("express");

const app = express();

const port = 5000 || process.env.PORT;

app.use(express.json());
app.use("/", (req, res) => {
  res.json({ message: "Api develolpment in progress" });
});

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
