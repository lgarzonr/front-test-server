const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const itemRouter = require("./routes/itemRoutes");

app.use("/api/items", itemRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
