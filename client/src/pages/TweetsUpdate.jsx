import React, { useState } from 'react';
import api from '../api';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    display: flex;
    flex: 1 2 550px;
    flex-direction: column;
    margin: 10px;
    align-content: center;
    background-color: #ffffff;
    border-right: 1px solid #e1e8ed;
`
const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 0px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    background-color: #1da1f2;
    margin: 15px 15px 15px 5px;
    border-radius: 30em;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
    border-radius: 30em;
`

export default function TweetsUpdate(props) {

    console.log(props.location.pathname);

    const path = props.location.pathname.split("/")
    const id = path.pop();

    console.log(id);

    const [text, setText] = useState("");

    async function handleChangeInput(event) {
        const newtext = event.target.value;
        setText(newtext);
    }

    async function handleUpdateTweet() {
        const data = {
            name: "Faraya Agatha",
            username: "@faraya",
            content: text
        }

        await api.updateTweetById(id, data).then(res => {
            console.log(data);
            setText("");
        })
        window.location.href = '/';
    }

    return (
        <Wrapper>
            <h3>Edit Tweet</h3>
            <Label>Tweet: </Label>
            <InputText
                type="text"
                value={text}
                onChange={handleChangeInput}
            />
            <Button onClick={handleUpdateTweet}>Update Tweet</Button>
            <CancelButton href={'/'}>Cancel</CancelButton>
        </Wrapper>
    )
}