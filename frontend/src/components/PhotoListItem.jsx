import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

// defines the structure for displaying a single photo item with its details
const PhotoListItem = (props) => { // Props allow data to be passed in from a parent component, App, into PhotoListItem.
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" alt="Item image" src={props.imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" alt="Profile image" src={props.profile} />
        <div className="photo-list__user-info">
          {props.name} <br/>
          <div className="photo-list__user-location"> {props.city}, {props.country}  </div>
        </div>
      </div>
    </div>
  );
};
  

export default PhotoListItem;
