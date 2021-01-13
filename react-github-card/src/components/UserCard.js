import React, {Component} from 'react';
import styled from 'styled-components'

const Avatar = styled.img `
    border-radius: 10px;
`


// const Card = styled.div `
//     background-color: black;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     border-radius: 10px;
// `


class UserCard extends React.Component {
    render() {
        const {avatar_url, name, login, location, html_url, followers, following, bio} = this.props
        return(
            <div>
                <Avatar width='180' src={avatar_url} />
                <h2>{name}</h2>
                <h4>{login}</h4>
                <p>Location: {location}</p>
                <p>Profile: {html_url}</p>
                <div><h3>Followers</h3> {followers.map(follower => <p>{follower}</p>)}</div>
                <p>Following: {following}</p>
                <p>Bio: {bio}</p>
            </div>
        )
    }
}

export default UserCard;