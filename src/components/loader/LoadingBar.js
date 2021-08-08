import React from 'react'
import loadingIcon from '../../res/gifs/loading-spinner.svg'

function LoadingBar() {
  return (
    <div className="loading-bar">
      <img className="loading-icon" src={loadingIcon} alt="Loading....."/>
    </div>
  )
}

export default LoadingBar
