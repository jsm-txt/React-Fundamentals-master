// src/Project.js
import data from './sfpopos-data.json'

import React from 'react'

import './POPOSSpace.css';

const titles = data.map((obj) => {
  return <h1>{obj.title}</h1>
})

function POPOSSpace(props) {
  const { name, image, address, hours } = props
  return (
    <div className="POPOSSpace">
      <h1>{name}</h1>
      <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      <div>{address}</div>
      <div>{hours}</div>
    </div>
  )
}


console.log(titles)
export default POPOSSpace
