import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => props.toggleFav(props.photoId)} >
        <FavIcon selected={props.selected} />
      </div>
    </div>
  );
};
// <FavIcon selected={props.selected} /> = <FavIcon selected={props.favouritedPhotos.includes(props.photoId)} />

export default PhotoFavButton;