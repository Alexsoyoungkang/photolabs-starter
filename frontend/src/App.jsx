import React from 'react';

// Routes
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Hooks
import useApplicationData from 'hooks/useApplicationData';

// Styling
import './App.scss';


const App = () => {
  const {
    ACTIONS,
    state,
    openModal,
    closeModal,
    toggleFav
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={state.photos} topics={state.topics} openModal={openModal} toggleFav={toggleFav} favouritedPhotos={state.favPhotos} />
      {state.isModalOpen && (
        <PhotoDetailsModal
          clickedPhoto={state.clickedPhoto}
          openModal={openModal}
          closeModal={closeModal}
          toggleFav={toggleFav}
          favouritedPhotos={state.favPhotos}
        />
      )}
    </div>
  );
};

export default App;