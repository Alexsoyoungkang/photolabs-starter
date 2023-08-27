import React from 'react';

// Routes
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Hooks
import useApplicationData from 'hooks/useApplicationData';

// Styling
import './App.scss';

// Mock data
import topics from 'mocks/topics';
import photos from 'mocks/photos';

// Note: Rendering a single component to build components in isolation


const App = () => {
  // const [clickedPhoto, setClickedPhoto] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [favPhotos, setFavPhotos] = useState([]);

  // const openModal = (photo) => {
  //   setClickedPhoto(photo);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setClickedPhoto(null);
  //   setIsModalOpen(false);
  // };

  // const toggleFav = (photoId) => { //takes a parameter photoId.
  //   setFavPhotos( // depending on whether the photoId was already in the favPhotos array or not, the setFavPhotos function is called to update the favPhotos state with the new array. - either with the removed photoId or with the added photoId
  //     favPhotos.includes(photoId) // checks if the favPhotos array already includes the given photoId. If photoId is already present in the array returns true/ if isn't then false
  //       ? favPhotos.filter((fave) => fave !== photoId) // filters out the photoId from the favPhotos array - creates a new array that excludes the photoId.
  //       : [...favPhotos, photoId] // if photoId: 4, from: [1, 2, 3] => [1, 2, 3, 4]
  //   );  // ^^^ If favPhotos does not include photoId, creates a new array by spreading the elements of favPhotos and adding photoId to the end


  // };
  // console.log("favphotos", favPhotos);
  // console.log("ClickedPhotos", clickedPhoto);
  // openModal={openModal} key = value / before
  // favouritedPhotos={favPhotos} - favouritedPhotos is variable, {favPhotos} = value

  const {
    clickedPhoto,
    isModalOpen,
    favPhotos,
    openModal,
    closeModal,
    toggleFav
  } = useApplicationData();

  // console.log("favphotos", useApplicationData.favPhotos);
  // console.log("ClickedPhotos", clickedPhoto);

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} openModal={openModal} toggleFav={toggleFav} favouritedPhotos={favPhotos} />
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