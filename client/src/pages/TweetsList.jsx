import React, { useState, useEffect } from 'react';
import Avatar from "../components/Avatar";
import api from '../api';

import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";

export default function TweetsList() {

    const [data, setData] = useState([]);
    const [sortTweet, setSortTweet] = useState("Asc");

    useEffect(() => {
        api.getAllTweets()
            .then(response => { setData(response.data.data) });
    }, []);

    data.reverse();

    function UpdateTweet(event) {
        console.log(event.target.value);
        const id = event.target.value;
        event.preventDefault();
        window.location.href = `/tweets/update/${id}`
    }

    function DeleteTweet(event) {
        console.log(event.target.value)
        const id = event.target.value;
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the tweet permanently?`,
            )
        ) {
            api.deleteTweetById(id, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfully deleted tweet.");
                }
            });
        }
        window.location.reload();
    }

    function getDate(date) {
        var d = new Date(date)
        const day = d.toDateString();
        const hour = d.getHours();
        const min = d.getMinutes();
        return (day + ' ' + hour + ':' + min)
    }

    function SortTweet() {
        if (sortTweet === 'Asc') {
            data.sort((x, y) => {
                return x.updatedAt - y.updatedAt;
            })
            setSortTweet('Desc')
        }
        else {
            data.sort((x, y) => {
                return y.updatedAt - x.updatedAt;
            })
            setSortTweet('Asc')
        }
    }

    return (
        <div className="tweet-list-container" >
            <button onClick={SortTweet} value={sortTweet}>Sort Tweet</button>
            {data.map((tweet) => (
                <div key={tweet._id} className="tweet-content">
                    <div className="tweet-area">
                        <Avatar />
                        <div className="content-area">
                            <div><span className="fullname">{tweet.name}</span>{" "}
                                <span className="username">{tweet.username}</span>{" "}
                                &middot;{" "}
                                <span className="time">{getDate(tweet.updatedAt)}</span></div>
                            <p>{tweet.content}</p>
                        </div>
                    </div>
                    <div className="options">
                        <div>
                            <BiMessageRounded className="icon" />
                            <FaRetweet className="icon" />
                            <BiHeart className="icon" />
                            <BiShareAlt className="icon" />
                        </div>
                        <button onClick={UpdateTweet} name="updateID" value={tweet._id}>Edit</button>
                        <button onClick={DeleteTweet} name="contentID" value={tweet._id}>Delete</button>
                    </div>
                </div>
            ))}
        </div >
    )
}