const express = require('express')
const { handlegenerateNewShortUrl } = require('../controller/url')

const router = express.Router();

router.post('/', handlegenerateNewShortUrl)
module.exports = router;