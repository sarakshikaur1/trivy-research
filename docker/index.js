const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Trivy Node.js demo app"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
