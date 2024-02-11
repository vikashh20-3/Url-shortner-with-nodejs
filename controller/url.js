const shortid = require('shortid');
const URL = require('../models/url')
async function handlegenerateNewShortUrl(request, response) {
    const body = request.body;
    if (!body.url) return response.status(400).json({ error: "url is required" });
    const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: []
    })``

    return response.json({ id: shortID })

};
module.exports = {
    handlegenerateNewShortUrl
};