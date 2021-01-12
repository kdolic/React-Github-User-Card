import React, {Component} from 'react';

class UserCard extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.user.avatar_url} />
                <h2>{this.props.user.name}</h2>
                <h4>{this.props.user.login}</h4>
                <p>Location: {this.props.user.location}</p>
                <p>Profile: {this.props.user.html_url}</p>
                <p>Followers: {this.props.user.followers}</p>
                <p>Following: {this.props.user.following}</p>
                <p>Bio: {this.props.user.bio}</p>
            </div>
        )
    }
}

export default UserCard;