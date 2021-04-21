import React from 'react';
import { TweetsList, TweetsInsert } from '../pages'

export default function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            <TweetsInsert />
            <div className="divider"></div>
            <TweetsList />
        </div>
    );
}