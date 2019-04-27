//sets up the reusable Friendcard component
import React from "react";
import "./FriendCard.css";

const Friendcard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default Friendcard;