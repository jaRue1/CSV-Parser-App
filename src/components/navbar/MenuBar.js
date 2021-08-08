import React from 'react'
import {Link} from 'react-router-dom'

 function MenuBar() {
  return (
    <div className="menu-bar">
      <ul className="menu-bar-items">
        <li>
        <Link to="/test" >
          Test
        </Link>
        </li>
        <li>
        <Link to="/home">
          Home
        </Link>
        </li>
      </ul>
    </div>
  )
}
export default MenuBar