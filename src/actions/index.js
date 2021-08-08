import alt from "../alt"
import toastr from "toastr"
import history from "../history"

class Actions{
  getAnimes(payload){
    return payload
  }

  deleteAnime(id){
    toastr.success(`Delete anime with id ${id} from Anime Table`)
    return id
  }
  resetAnimeTable(payload){
    toastr.success("Reset Anime Table")
    return payload
  }
  
  resetAnimeGenreTable(payload){
    toastr.success("Reset Anime_Genre Table")
    return payload
  }

  resetUserTable(payload){
    toastr.success("Reset Users Table")
    return payload
  }

  resetReviewTable(payload){
    toastr.success("Reset Reviews Table")
    return payload
  }
  
  resetUserReviewTable(payload){
    toastr.success("Reset User_Review Table")
    return payload
  }

   getAllGenres(payload){
     return payload
   }

   getLargestAnimeId(payload){
    return payload
   }

   addAnime(anime){
    const {name , type } = anime
    toastr.success(`Added the ${type.toLowerCase()} ${name} to the Anime Table`)
    history.push('/home')
    return anime
   }

}

export default alt.createActions(Actions)