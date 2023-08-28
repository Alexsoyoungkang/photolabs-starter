import { useReducer } from "react";

import topics from 'mocks/topics';
import photos from 'mocks/photos';

const ACTIONS = {
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  TOGGLE_FAV: 'TOGGLE_FAV',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.TOGGLE_FAV:
    return { ...state, favPhotos: state.favPhotos.includes(action.photoId) // checks if the favPhotos array already includes the given photoId. If photoId is already present in the array returns true/ if isn't then false
      ? state.favPhotos.filter((fave) => fave !== action.photoId) // filters out the photoId from the favPhotos array - creates a new array that excludes the photoId.
      : [...state.favPhotos, action.photoId]};
  case ACTIONS.OPEN_MODAL:
    return { ...state, clickedPhoto: action.photo, isModalOpen: true};
  case ACTIONS.CLOSE_MODAL:
    return { ...state, clickedPhoto: null, isModalOpen: false};
  case ACTIONS.SET_PHOTO_DATA:
    return { ...state, photos:action.photos};
  case ACTIONS.SET_TOPIC_DATA:
    return { ...state, topics:action.topics};
  
  default:
    return state;
  }
};

const useApplicationData = () => {
  const defaultState = {
    clickedPhoto: null,
    isModalOpen: false,
    favPhotos: [],
    photos: photos,
    topics: topics
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  // useState before useReducer
  // const [clickedPhoto, setClickedPhoto] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [favPhotos, setFavPhotos] = useState([]);

  const openModal = (photo) => {
    dispatch({type: ACTIONS.OPEN_MODAL, photo});
      
    //   setClickedPhoto(photo);
    // setIsModalOpen(true);
  };

  const closeModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL});
  };

  const toggleFav = (photoId) => { //takes a parameter photoId.
    dispatch({type: ACTIONS.TOGGLE_FAV, photoId});
    //   setFavPhotos( // depending on whether the photoId was already in the favPhotos array or not, the setFavPhotos function is called to update the favPhotos state with the new array. - either with the removed photoId or with the added photoId
    //     favPhotos.includes(photoId) // checks if the favPhotos array already includes the given photoId. If photoId is already present in the array returns true/ if isn't then false
    //       ? favPhotos.filter((fave) => fave !== photoId) // filters out the photoId from the favPhotos array - creates a new array that excludes the photoId.
    //       : [...favPhotos, photoId] // if photoId: 4, from: [1, 2, 3] => [1, 2, 3, 4]
    // );  // ^^^ If favPhotos does not include photoId, creates a new array by spreading the elements of favPhotos and adding photoId to the end
    
  };


  // console.log("favphotos", favPhotos);
  // console.log("ClickedPhotos", clickedPhoto);
  // openModal={openModal} key = value / before
  // favouritedPhotos={favPhotos} - favouritedPhotos is variable, {favPhotos} = value
  return {
    state,
    dispatch,
    openModal,
    closeModal,
    toggleFav
  };
};


export default useApplicationData;