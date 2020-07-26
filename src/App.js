import React from 'react'

export default class App extends React.Component {

    state= {
        people: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(people => this.setState({people}))
    }


    render(){
        return(
            <div>
            <h1>Where my people at?</h1>
            </div>
        )
    }



}