import React, { Component } from 'react';
import Hero from '../../components/Hero';
import ProfileImg from '../../components/ProfileImg';
import Tribe from '../../components/Tribe';
import Board from '../../components/Board';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  componentDidMount() {
    console.log("profile props", this.props)
    this.setProfileName(this.props.match.params['username']);
  }

  componentWillReceiveProps(nProps) {
    this.setProfileName(nProps.match.params['username']);
  }

  setProfileName(profileName) {
    this.setState({
      username: profileName
    });
  }

  render() {
    return <div>This is the profile of {this.state.username}
    <div className="container">
            <div className="profile">
                <Hero />
                <ProfileImg />
            </div>
                <Tribe />
                <Board />
        
</div>

    </div>;
  }
}
