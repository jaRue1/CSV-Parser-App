import React from 'react'

const ResetButton = ({onClick}) => { // this a react component that will reset the sql DB
  return(
  <i className="reset-button"
    onClick={onClick}
    title="Reset DataBase"
  >
    <span>Reset DataBase</span>
  </i>
  )
}
export default ResetButton