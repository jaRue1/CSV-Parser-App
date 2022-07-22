import React from 'react'

const ResetButton = ({onClick}) => { // this a react component that will reset the sql DB
  return(
  <i className="fa fa-redo-alt reset-button"
    onClick={onClick}
    title="Reset DataBase"
  >
    <span style={{marginLeft: 10}}>Reset DataBase</span>
  </i>
  )
}
export default ResetButton