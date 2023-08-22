import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [isFavorited, setIsFavorited] = useState(false); // Initial state: isFavorited is false

  const handleFavClick = () => { //  = setIsFavorited(!isFavorited);
    if (isFavorited) {
      setIsFavorited(false);
    } else {
      setIsFavorited(true);
    }
  };


  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleFavClick}>
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
};

export default PhotoFavButton;