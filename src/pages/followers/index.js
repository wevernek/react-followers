import React, { Component } from 'react';
import API from '../../services/api';

export default class Followers extends Component {
  state = {
    followers: [],
  };

  async componentDidMount() {
    const { login } = this.props.match.params;
    const response = await API.get(`https://api.github.com/users/${login}/followers`);

    this.setState({ followers: response.data });
  }

  render() {
    return (
      <div className="followers-list">
        {this.state.followers.map(follower => (
          <div key={follower.id} className="followers-card">
            <div className="photo">
              <img src={follower.avatar_url} alt="Foto do usuário" />
            </div>
            <div className="texts">
              <h2>{follower.login}</h2>
              <p>{follower.id}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}