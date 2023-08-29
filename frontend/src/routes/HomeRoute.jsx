import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
// import topics from 'mocks/topics';
// import photos from 'mocks/photos';


const HomeRoute = (props) => { // topics = {topics} = props
  // const [favPhotos, setFavPhotos] = useState([]);

  // const toggleFav = (photoId) => { // photoId = photos user clicks
  //   setFavPhotos(
  //     favPhotos.includes(photoId)
  //       ? favPhotos.filter((fave) => fave !== photoId) // returns an array without photoId
  //       : [...favPhotos, photoId] // if photoId: 4, from: [1, 2, 3] => [1, 2, 3, 4]
  //   );
  //   // const newFavPhotos = favPhotos.includes(photoId)
  //   //   ? favPhotos.filter((fave) => fave !== photoId)
  //   //   : [...favPhotos, photoId];
  //   // setFavPhotos(newFavPhotos);

  // };
  // console.log(favPhotos);
  //console.log("homerouteprops", props);
  console.log("favphotos", props.favouritedPhotos);

  return (
    <div className="home-route">
      <TopNavigationBar topics ={props.topics} favPhotoCount={props.favouritedPhotos.length} />
      <PhotoList photos={props.photos} toggleFav={props.toggleFav} favouritedPhotos={props.favouritedPhotos} openModal={props.openModal}/>
    </div>
  );
};
  /*const props = {
    openModal: openModal,
    toggleFav: toggleFav,
    favouritedPhotos: favPhotos
  }*/
  
// favouritedPhotos={props.favouritedPhotos}
// favouritedPhotos in {props.favouritedPhotos} is the variable favPhotos from the app.jsx

export default HomeRoute;
