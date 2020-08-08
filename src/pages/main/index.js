import React from 'react';
import { Component } from 'react';
import API from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  state = {
    followers: []
  }

  componentDidMount() {
    this.loadFollowers();
  }

  loadFollowers = async () => {
    const response = await API.get('/followers');

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
              <Link to={`/followers/${follower.login}`}>Ver seguidores</Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}