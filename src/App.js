// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    astronauts: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(results => this.setState({ astronauts: results }))
  }

  render() {
    return (
      <div></div>
    )
  }
}