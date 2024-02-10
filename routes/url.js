const express = require('express')
const { handlegenerateNewShortUrl } = require('../controller/url')

const router = express.router();

router.post('/', handlegenerateNewShortUrl)
module.exports = router;