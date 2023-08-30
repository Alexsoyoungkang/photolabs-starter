import { useEffect, useReducer } from "react";

const ACTIONS = {
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  TOGGLE_FAV: 'TOGGLE_FAV',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_NAV_TOPIC: 'SET_NAV_TOPIC',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};

const reducer = (state, action) => {
  switch (action.type) {
  case 'SET_PHOTO_DATA':
    return { ...state, photos: action.payload };
  case 'SET_TOPIC_DATA':
    return { ...state, topics: action.payload };
  case ACTIONS.TOGGLE_FAV:
    return { ...state, favPhotos: state.favPhotos.includes(action.photoId) // checks if the favPhotos array already includes the given photoId. If photoId is already present in the array returns true/ if isn't then false
      ? state.favPhotos.filter((fave) => fave !== action.photoId) // filters out the photoId from the favPhotos array - creates a new array that excludes the photoId.
      : [...state.favPhotos, action.photoId]};
  case ACTIONS.OPEN_MODAL:
    return { ...state, clickedPhoto: action.photo, isModalOpen: true};
  case ACTIONS.CLOSE_MODAL:
    return { ...state, clickedPhoto: null, isModalOpen: false};
  case 'SET_NAV_TOPIC':
    state.topic = action.topic;
    return { ...state };
  case 'GET_PHOTOS_BY_TOPICS':
    state.photos = action.payload;
    return { ...state };
  default:
    return state;
  }
};

const useApplicationData = () => {
  const defaultState = {
    clickedPhoto: null,
    isModalOpen: false,
    favPhotos: [],
    photos: [],
    topics: [],
    photo: null,
    topic: null
  };

  // Create useReducer
  const [state, dispatch] = useReducer(reducer, defaultState);

  // Fetch topic data
  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(topicData => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData }));
  }, []);

  // Get photos by topic
  useEffect(() => {
    if (state.topic) {
      fetch(`/api/topics/photos/${state.topic}`)
        .then(res => res.json())
        .then(photoData => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: photoData }));

    // Get all photos
    } else {
      fetch('/api/photos')
        .then(res => res.json())
        .then(photoData => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData }));
    }
  }, [state.topic]);

  const openModal = (photo) => {
    dispatch({type: ACTIONS.OPEN_MODAL, photo});
  };

  const closeModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL});
  };

  const toggleFav = (photoId) => { //takes a parameter photoId.
    dispatch({type: ACTIONS.TOGGLE_FAV, photoId});
  };


  return {
    ACTIONS,
    state,
    dispatch,
    openModal,
    closeModal,
    toggleFav
  };
};


export default useApplicationData;