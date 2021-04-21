import React from 'react';

import { FaTwitter } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { FiHash } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import { RiFileList2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { FiFeather } from "react-icons/fi";

export default function Links() {
    return (
        <div className="sidebar-menu">
            <a href="/" className="link">
                <div to="/tweets/list" className="menu-container-logo">
                    <FaTwitter className="menu-icon-fill" />
                </div>
            </a>
            <a href="/tweets" className="link">
                <div className="menu-container-home">
                    <FiHome className="menu-icon" />
                    <p to="/tweets/list" className="menu-link">Home</p>
                </div>
            </a>
            <div className="menu-container">
                <FiHash className="menu-icon" />
                <p to="/" className="menu-link">Explore</p></div>
            <div className="menu-container">
                <FiBell className="menu-icon" />
                <p to="/" className="menu-link">Notifications</p></div>
            <div className="menu-container">
                <FiMail className="menu-icon" />
                <p to="/" className="menu-link">Messages</p></div>
            <div className="menu-container">
                <FiBookmark className="menu-icon" />
                <p to="/" className="menu-link">Bookmarks</p></div>
            <div className="menu-container">
                <RiFileList2Line className="menu-icon" />
                <p to="/" className="menu-link">Lists</p></div>
            <div className="menu-container">
                <CgProfile className="menu-icon" />
                <p to="/" className="menu-link">Profile</p></div>
            <div className="menu-container">
                <CgMoreO className="menu-icon" />
                <p to="/" className="menu-link">More</p></div>
            <div className="menu-btn-tweet">
                <button>Tweet</button>
            </div>
            <div className="menu-container-tweet">
                <FiFeather className="menu-icon-tweet" />
            </div>
        </div >
    );
}