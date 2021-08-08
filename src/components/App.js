import React, { Component } from "react"
import TableContainer from "./anime-table/TableContainer.js"
import Table from "./anime-table/Table.js"
import MenuBar from "./navbar/MenuBar.js"
import history from "../history.js"
import { Router, Route, Switch } from "react-router-dom"

export default class App extends Component {
  // react class component
  render() {
    return (
      <Router history={history}>
        <MenuBar />
        <Switch>
          <Route path="/home" exact component={TableContainer} />
          <Route path="/test" exact component={Table} />
          <Route />
        </Switch>
      </Router>
    )
  }
}
