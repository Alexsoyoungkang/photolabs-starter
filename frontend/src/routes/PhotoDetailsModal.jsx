import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { closeModal } = props;

  const handleCloseClick = () => {
    closeModal();
  };
  console.log("clickedPhoto", props);

  const arrayPhoto = Object.keys(props.clickedPhoto.similar_photos).map((key) =>{
    return props.clickedPhoto.similar_photos[key];
  }); // returns an array of similar_photos of the clickedPhoto
  //console.log("arrayPhoto", arrayPhoto);

  return (
    <div className="photo-details-modal" >
      <button className="photo-details-modal__close-button" onClick={ handleCloseClick }>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <section className="photo-details-modal__images" >
        <PhotoFavButton
          toggleFav={props.toggleFav}
          favouritedPhotos={props.favouritedPhotos}
          selected={props.favouritedPhotos.includes(props.clickedPhoto.id)}
          photoId={props.clickedPhoto.id} />
        <img src={props.clickedPhoto.urls.regular} className="photo-details-modal__image" />
        <header className="photo-details-modal__header">Similar Photos</header>
        <PhotoList photos={arrayPhoto} toggleFav={props.toggleFav} favouritedPhotos={props.favouritedPhotos} openModal={props.openModal} />
      </section>
    </div>
  );
}; // <PhotoList photos={arrayPhoto} /> passing the arrayPhoto value with key named photos to PhotoList

export default PhotoDetailsModal;
