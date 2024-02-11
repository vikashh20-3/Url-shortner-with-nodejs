const express = require("express");

const { connectToMongoDB } = require('./connect')
const urlRoute = require('./routes/url')
const app = express();

app.use(express.json())

app.use("/url", urlRoute);

// this middleware is used to parse the body

connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log('mongo db connected'))
const PORT = 8001;
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));