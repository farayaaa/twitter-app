const express = require('express');

const tweetCtrl = require('../controllers/tweet-ctrl');

const router = express.Router();

router.post('/tweet', tweetCtrl.createTweet);
router.put('/tweet/:id', tweetCtrl.updateTweet);
router.delete('/tweet/:id', tweetCtrl.deleteTweet);
router.get('/tweets', tweetCtrl.getTweets);
router.get('/tweet/:id', tweetCtrl.getTweetById);

module.exports = router
