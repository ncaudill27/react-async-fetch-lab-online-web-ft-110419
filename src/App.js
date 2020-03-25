import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(this.renderGetRequest)
  }

  renderGetRequest(crew) {
    for (const member in crew) {
      return (<div>Name: {member.name}, Craft: {member.craft}</div>)
    }
  }

  render() {
    return(
      <div>
        <h1>Hello</h1>
        {this.renderGetRequest()}
      </div>
    )
  }
}

export default App