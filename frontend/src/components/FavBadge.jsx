import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => { // displayAlert prop based on the value of isFavPhotoExist. { favPhotoCount } = props
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={props.favPhotoCount > 0} />
    </div>
  );
};
// If favPhotoCount is greater than 0, it sets the displayAlert prop to true.

export default FavBadge;