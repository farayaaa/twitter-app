import React, { useState } from 'react';
import api from '../api';
import Avatar from '../components/Avatar';

import { BsCardImage } from "react-icons/bs";
import { RiFileGifLine } from "react-icons/ri";
import { BiPoll } from "react-icons/bi";
import { GrEmoji } from "react-icons/gr";
import { BiCalendarEvent } from "react-icons/bi";

export default function TweetsInsert() {

    const [text, setText] = useState("");

    const handleChangeInput = async event => {
        const content = event.target.value;
        setText(content);
    }

    const handleAddTweet = async (event) => {
        if (text.length > 280) {
            alert(`There are ${text.length} characters. Max characters are 280.`)
        } else if (text.length === 0) {
            alert(`You can tweet an empty text. There must be at least 1 character.`)
        }
        else {
            const data = {
                name: "Faraya",
                username: "@faraya",
                content: text
            }
            event.preventDefault();
            await api.insertTweet(data).then(res => {
                setText("");
                window.location.reload();
            }).catch(e => {
                console.log(e);
            });
        }
    }

    return (
        <div className="tweet-form-container">
            <Avatar />
            <div className="tweet-form">
                <input
                    type="text"
                    placeholder="What's happening?"
                    min="1"
                    max="280"
                    value={text}
                    onChange={handleChangeInput}
                />
                <div className="tweet-options">
                    <div className="attachment-options">
                        <BsCardImage className="icon" />
                        <RiFileGifLine className="icon" />
                        <BiPoll className="icon" />
                        <GrEmoji className="icon" />
                        <BiCalendarEvent className="icon" />
                    </div>
                    <button onClick={handleAddTweet} className="tweet-btn">Tweet</button>
                </div>
            </div>
        </div>
    )
}