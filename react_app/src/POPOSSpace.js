// src/Project.js

import React from 'react'
import { Link } from 'react-router-dom'
import data from './sfpopos-data.json'
import './POPOSSpace.css';

const titles = data.map((obj) => {
  return <h1>{obj.title}</h1>
})

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props
  return (
    <div className="POPOSSpace">
      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      </Link>
      <div>{address}</div>
      <div>{hours}</div>
    </div>
  )
}


console.log(titles)
export default POPOSSpace
