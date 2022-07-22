import React, { Component } from "react"
import TableContainer from "./anime-table/TableContainer.js"
import Table from "./anime-table/Table.js"
import MenuBar from "./navbar/MenuBar.js"
import history from "../history.js"
import { Router, Route, Switch } from "react-router-dom"

import MenuBar from "./navbar/MenuBar.js"
import history from "../history.js"
import { Router, Route, Switch } from "react-router-dom"
import AnimeForm from "./anime-form/AnimeForm.js"
import AnimeListContainer from "./anime-list/AnimeListContainer.js"
import UserListContainer from "./user-list/UserListContainer.js"

export default class App extends Component {
  // react class component
  render() {
    return (
      <Router history={history}>
        <MenuBar />
        <Switch>
          <Route path="/home" exact component={TableContainer} />
          <Route path="/add" exact component={AnimeForm} />
          <Route path="/list" exact component={AnimeListContainer} />
          <Route path="/users" exact component={UserListContainer} />
          <Route />
        </Switch>
      </Router>
    )
  }
}
