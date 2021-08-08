import alt from "../alt"
import Actions from "../actions"

const getAllUrl = "http://localhost:4000/getAllAnime"

class AnimeStore{
  constructor() {
    this.anime = []

    this.bindListeners({
      handleGetAnimes: Actions.GET_ANIMES 
    })
  }
  handleGetAnime = payload => {
    console.log('get animes from AnimeStore')
    fetch(getAllUrl)
      .then(res =>  res.json())
      .then(json => {
        return this.setState({ animes: json})
      })
  }
}

export default AnimeStore = alt.createStore(AnimeStore, "AnimeStore")
window.AnimeStore = AnimeStore;