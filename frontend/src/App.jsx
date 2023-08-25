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

  const toggleFav = (photoId) => { //takes a parameter photoId.
    setFavPhotos( // depending on whether the photoId was already in the favPhotos array or not, the setFavPhotos function is called to update the favPhotos state with the new array. - either with the removed photoId or with the added photoId
      favPhotos.includes(photoId) // checks if the favPhotos array already includes the given photoId. If photoId is already present in the array returns true/ if isn't then false
        ? favPhotos.filter((fave) => fave !== photoId) // filters out the photoId from the favPhotos array - creates a new array that excludes the photoId.
        : [...favPhotos, photoId] // if photoId: 4, from: [1, 2, 3] => [1, 2, 3, 4]
    );  // ^^^ If favPhotos does not include photoId, creates a new array by spreading the elements of favPhotos and adding photoId to the end


  };
  console.log("favphotos", favPhotos);
  // openModal={openModal} key = value / before
  // favouritedPhotos={favPhotos} - favouritedPhotos is variable, {favPhotos} = value

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