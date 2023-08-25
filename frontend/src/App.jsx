import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation


const App = () => {
  const [clickedPhoto, setClickedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favPhotos, setFavPhotos] = useState([]);

  const openModal = (photo) => {
    setClickedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setClickedPhoto(null);
    setIsModalOpen(false);
  };

  const toggleFav = (photoId) => { // photoId = photos user clicks
    setFavPhotos(
      favPhotos.includes(photoId)
        ? favPhotos.filter((fave) => fave !== photoId) // returns an array without photoId
        : [...favPhotos, photoId] // if photoId: 4, from: [1, 2, 3] => [1, 2, 3, 4]
    );


  };

  return (
    <div className="App">
      <HomeRoute openModal={openModal} toggleFav={toggleFav} favouritedPhotos={favPhotos} />
      {isModalOpen && (
        <PhotoDetailsModal
          clickedPhoto={clickedPhoto}
          closeModal={closeModal}
          toggleFav={toggleFav}
          favouritedPhotos={favPhotos}
        />
      )}
    </div>
  );
};

export default App;