import React from 'react'

const ResetButton = ({onClick}) => {
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