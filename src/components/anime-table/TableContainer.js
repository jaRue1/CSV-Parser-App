import React, {Component} from 'react'
import ResetButton from './ResetButton.js'
import Table from "./Table.js"
import KH from "../../res/gifs/KH.gif"

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
      <>
      <div>
                                   {/* minior styling */}
        <div className="centered-row" style={{ paddingTop: 10, paddingBottom: 10 }}> 
          <p className="table-title"> Anime Information</p>
          <ResetButton onClick={ () => console.log(" Reset Button Clicked")} />
        </div>

        <div className="centered-row">
          <img src={KH} alt="kingdom hearts gif"/>
        </div>

      </div>
      <Table data={this.state.data}/> {/* // passing the data into this component call Table */}
      </>
    )
  }
}
