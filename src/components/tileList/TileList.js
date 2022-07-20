import React from "react";

import { Tile } from "../tile/Tile";

export const TileList = (props) => {

  // console.log(props)
  
  let tiles = [];
  
  if (props.contacts) {
    
    tiles = props.contacts.map((contact, index) => {
      return <Tile contact={contact} key={index}/>
    });
  }

  if (props.appointments) {
    tiles = props.appointments.map((appointment, index) => {
      return <Tile appointment={appointment} key={index}/>
    });
  }


    return (
      <div>
        {tiles}
      </div>
    );

}