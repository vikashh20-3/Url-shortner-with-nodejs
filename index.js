const express = require("express");

const { connectToMongoDB } = require('./connect')
const urlRoute = require('./routes/url')
const app = express();
const URL = require('./models/url')

// this middleware is used to parse the body
app.use(express.json())

app.use("/url", urlRoute);

app.get('/:shortID', async (req, res) => {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortID
    }, {
        $push: {
            visitHistory: Date.now()
        }

    })
    res.redirect(entry.redirectURL)

});

connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log('mongo db connected'))
const PORT = 8001;
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));