const Tweet = require('../models/tweet-model');

createTweet = (req, res) => {

    if (!req.body) {
        return res.status(400).json({ success: false, error: 'You must provide a tweet' })
    }

    const tweet = new Tweet(req.body)

    if (!tweet) {
        return res.status(400).json({ success: false, error: err })
    }

    tweet.save().then(() => {
        return res.status(201).json({
            success: true, id: tweet._id, message: 'Tweet created!'
        })
    }).catch(err => {
        return res.status(400).json({ err, message: 'Tweet not created.' })
    });
}

updateTweet = async (req, res) => {

    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a content to update'
        })
    }

    Tweet.findOne({ _id: req.params.id }, (err, tweet) => {
        if (err) {
            return res.status(404).json({
                err, message: 'Tweet not found!'
            })
        }
        tweet.name = req.body.name
        tweet.username = req.body.username
        tweet.content = req.body.content

        tweet.save().then(() => {
            return res.status(200).json({
                success: true,
                id: tweet._id,
                message: 'Tweet updated!'
            })
        }).catch(err => {
            return res.status(404).json({ err, message: 'Tweet not updated!' })
        })
    })
}

deleteTweet = async (req, res) => {
    await Tweet.findOneAndDelete({ _id: req.params.id }, (err, tweet) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tweet) {
            return res.status(404)
                .json({ success: false, error: `Tweet not found` })
        }
        return res.status(200).json({ success: true, data: tweet, message: 'Tweet deleted!' })
    }).catch(err => console.log(err))
}

getTweets = async (req, res) => {
    await Tweet.find({}, (err, tweets) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!tweets.length) {
            return res.status(404)
                .json({ success: false, error: `Tweet not found` })
        }
        return res.status(200).json({ success: true, data: tweets })
    }).catch(err => console.log(err))
}

getTweetById = async (req, res) => {
    await Tweet.findOne({ _id: req.params.id }, (err, tweet) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tweet) {
            return res
                .status(404)
                .json({ success: false, error: `Tweet not found` })
        }
        return res.status(200).json({ success: true, data: tweet })
    }).catch(err => console.log(err))
}

module.exports = {
    createTweet,
    updateTweet,
    deleteTweet,
    getTweets,
    getTweetById,
}
