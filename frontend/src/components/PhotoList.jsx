import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



const PhotoList = (props) => { // props = <PhotoList photos = {photos} />
  console.log("PhotoListprops", props);
  return (
    <ul className="photo-list">
      {props.photos.map((item) => { // maps over the photos array from mock file received from the parent (homeroute).
        return (
          <PhotoListItem  // renders PhotoListItem component with the pased-in data
            key={item.id}
            photoId={item.id}
            imageSource={item.urls.regular}
            imageSourceFull={item.urls.full}
            profile={item.user.profile}
            name={item.user.name}
            username={item.user.username}
            city={item.location.city}
            country={item.location.country}
            toggleFav={props.toggleFav}
            favouritedPhotos={props.favouritedPhotos}
            openModal={props.openModal}
            photo={item}
          />
        );
      })}
    </ul>
  );
};
/* toggleFav={props.toggleFav}
favouritedPhotos={props.favouritedPhotos}
openModal={props.openModal}  - coming from HomeRoute which is coming from App.jsx */

export default PhotoList;
