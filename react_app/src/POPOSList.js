// src/POPOSList.js
import data from './sfpopos-data.json'
import React from 'react';
import './POPOSList.css';
import POPOSSpace from './POPOSSpace';

function POPOSList() {
    const spaces = data.map(({ title, address, images, hours }, i) => {
        return (
            <POPOSSpace
              id={i} // added new prop id here!
              key={title}  // The title could be a key
              name={title}
              address={address}
              image={images[0]}
              hours={hours} // add a new prop for hours here
            />
          )
        })
      return (
        <div className="POPOSList">
          { spaces }
        </div>
      )
    }

export default POPOSList
