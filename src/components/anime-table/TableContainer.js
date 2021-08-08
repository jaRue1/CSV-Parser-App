import React, {Component} from 'react'
import ResetButton from './ResetButton.js'
import Table from "./Table.js"
import KH from "../../res/gifs/KH.gif"
import AnimeStore from "../../stores/AnimeStore"
import Actions from "../../actions"
export default class TableContainer extends Component { // react class component
  state = {
    animes: [] // empty array 
  }

  componentDidMount() {
    AnimeStore.listen(this.onChange)
    Actions.getAnimes("")
  }
  componentWillUnmount() {
    AnimeStore.unlisten(this.onChange)
  }
  onChange = store => {
    const { animes } = store
    this.setState({animes})
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
      <Table data={this.state.animes}/> {/* // passing the data into this component call Table */}
      </>
    )
  }
}
