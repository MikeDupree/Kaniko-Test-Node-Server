const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(
    "<h1>Hello, Kaniko!</h1><p>This is a simple Node.js application.</p>",
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
