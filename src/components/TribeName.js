import React, { Component } from 'react';

export default class TribeName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tribename:''
    };
  }
componentDidMount() {
}
  
    render() {
        return (
            <div className="name">
            {this.props.name}
            </div>
        );
    }
}