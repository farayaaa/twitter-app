import React from "react";
import styled from "styled-components";

const Card = styled.div`
    padding: 5px;
    border-bottom: 1px solid #e1e8ed;
    .category {
        font-family: "Helvetica Neue", Helvetica, Arial;
        font-size: 15px;
        color: #aab8c2;
        margin-bottom: 3px;
    }
    .content {
        font-family: "Helvetica Neue", Helvetica, Arial;
        font-weight: bolder;
        color: #14171a;
        margin: 0;
        margin-bottom: 3px;
    }
    .counter {
        font-family: "Helvetica Neue", Helvetica, Arial;
        font-size: 13px;
        color: #aab8c2;
        margin: 0;
    }
    &:hover {
        background-color: #e1e8ed;
    }
    &:last-child {
        border-bottom:none;
    }`

function ContentCard(props) {
    return (
        <Card>
            <p className="category">{props.category} &bull; Trending</p>
            <p className="content">{props.content}</p>
            <p className="counter">{props.counter} Tweets</p>
        </Card>
    );
}

export default ContentCard;
