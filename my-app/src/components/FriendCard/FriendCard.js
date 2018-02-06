import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" 
    style={{ backgroundImage: `url("${props.image}")`}}
    onClick={() => props.handleClick(props)}>
  </div>
);

export default FriendCard;
