import React from "react";

// Receive props
export const Tile = (props) => {
 
  let values = [];
  
  // Extract the array of data from the props.contact value
  if (props.contact) {
    values = Object.values(props.contact);
  }
  // Extract the array of data from the props.appointment value
  if (props.appointment) {
    values = Object.values(props.appointment);
  }

  // process each element and its index in the array
  const data = values.map((value, index) => {
    let className = '';

    if (index === 0) {
      className = 'tile-title';
    } else {
      className = 'tile';
    }
    // crete <p> element for each value and 
    // use the value’s index as the key for the <p> element
    return <p key={index} className={className}>{value}</p>

  });

  return (
    <div className="tile-container">
      {data}
    </div>
  );
};
