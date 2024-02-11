const express = require("express");
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url');
const app = express();
const URL = require('./models/url');

// Middleware to parse the request body
app.use(express.json());

// Route for handling shortened URLs
app.use("/url", urlRoute);

// Route for redirecting based on shortID
app.get('/:shortID', async (req, res) => {

    const shortID = req.params.shortID;
    console.log("Requested shortID:", shortID);
    // Find the URL entry with the provided shortID
    const entry = await URL.findOneAndUpdate(
        {
            shortID,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );
    res.redirect(entry.redirectURL);
});

// Connect to MongoDB
connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.error('MongoDB connection error:', error));

// Start the server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));