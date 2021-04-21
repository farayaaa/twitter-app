import React from "react";
import styled from 'styled-components';
import ContentCard from "./ContentCard";
import { BiSearch } from "react-icons/bi";

const Container = styled.div.attrs({
    className: 'container',
})`
    display: flex;
    flex-direction: column;
    flex: 1 2 300px;
    margin: 0;
    padding:0;
    align-content: center;
    background-color: #ffffff;`

const Box = styled.div.attrs({
})`
    display: flex;
    flex-direction:column;
    margin:20px;
    background-color: #f5f8fa;
    padding: 15px;
    border-radius: 15px;`

const Title = styled.div`
    flex-direction: row;
    font-family: "Helvetica Neue", Helvetica, Arial;
    border-bottom: 1px solid #e1e8ed;
    font-size: 20px;
    font-weight: bolder;
    color: #000;
    margin: 0px;`

const Input = styled.input`
    display: flex;
    flex-basis: 1 2 200px;
    background-color:transparent;
    outline: none;
    border: none;
    font-size: 1em;
    font-family: inherit;`

export default function Explore() {
    return (
        <Container>
            <div className="search-bar">
                <BiSearch className="icon" />
                <Input className="search-input" type="text" placeholder="Search Twitter" />

            </div>
            <Box>
                <Title>
                    <p className="trending-header">Indonesia Trends</p>
                </Title>
                <ContentCard
                    category="1. Music"
                    content="#TaylorSwift"
                    counter="22.1K"
                />
                <ContentCard
                    category="2. Social"
                    content="#PeduliGempa"
                    counter="11.5K"
                />
                <ContentCard
                    category="3. K-pop"
                    content="#BlackPinkInYourArea"
                    counter="11.2K"
                />
            </Box>
        </Container>

    );
}