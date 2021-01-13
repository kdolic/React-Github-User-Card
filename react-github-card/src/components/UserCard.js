import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
 overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  background-color: hsl(10, 15%, 88%);

  .image {
      margin-top: 10px;
      border-radius: 10px;
  }
`;


class UserCard extends React.Component {
    render() {
        const {avatar_url, name, login, location, html_url, followers, following, bio} = this.props
        return(
            <Wrapper>
                <img className='image' width='180' src={avatar_url} />
                <h2 className='name'>{name}</h2>
                <h3 className='userName'>{login}</h3>
                <p>Location: {location}</p>
                <p>Profile: {html_url}</p>
                <div><h4>Followers</h4> {followers.map(follower => <p>{follower}</p>)}</div>
                <p>Following: {following}</p>
                <p>Bio: {bio}</p>
            </Wrapper>
        )
    }
}

export default UserCard;