import React from "react"
import { toCamelCase } from "../../utils"

const placeholders = {
  name:"Your Name ",
  type: "Movie Bow!",
  episodes: "100",
  rating: "1 -10",
  members: "100"
}

const InputList = ({ formValues, handleInput}) => {
  const inputJSX = Object.keys(formValues).map(key =>{
    const value = formValues[key]
    const keyName = key.toLowerCase()
    
    return (
      <div key={keyName} className="animated-input-box">
        <input className="animated-input"
          id={keyName}
          name={keyName}
          placeholder={placeholders[keyName]}
          value={value}
          onChange={handleInput}
        />
      <label htmlFor={keyName}>
      {toCamelCase(keyName)}
      </label>
      </div>
    )
  })
  return inputJSX
}

export default InputList