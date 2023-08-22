import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photoList.map((item) => { // maps over the photoListData prop array received from the parent (App) and generates a list of PhotoListItem components
        return (
          <PhotoListItem  // renders PhotoListItem component with the pased-in data
            key={item.id}
            imageSource={item.urls.regular}
            imageSourceFull={item.urls.full}
            profile={item.user.profile}
            name={item.user.name}
            username={item.user.username}
            city={item.location.city}
            country={item.location.country}
          />
        );
      })}
    </ul>
  );
};


export default PhotoList;
