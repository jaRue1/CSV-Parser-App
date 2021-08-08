import alt from "../alt"
import toastr from "toastr"

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
}

export default alt.createActions(Actions)