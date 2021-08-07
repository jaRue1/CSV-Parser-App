import React, {Component} from 'react'
import Table from "./Table.js"

export default class TableContainer extends Component { // react class component
  state = {
    data: [] // empty array 
  }

  componentDidMount() {
    fetch('http://localhost:4000/getAllAnime') // api point that gets all Anime
    .then(res => res.json())
    .then(json => {
      this.setState({data: json}) // setting the data I get back from my api call to state
    })
  }
  render() {
    console.log(this.state)
    return(
      <Table data={this.state.data}/> // passing the data into this component call Table
    )
  }
}
