const express = require("express");
const urlRoute = require('./routes/url')
const app = express();
app.use("/url", urlRoute);
const PORT = 8001;
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));