import React, { useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import topics from 'mocks/topics';
import photos from 'mocks/photos';


const HomeRoute = () => { // topics = {topics} = props
  const [favPhotos, setFavPhotos] = useState([]);

  const toggleFav = (photoId) => { // photoId = photos user clicks
    setFavPhotos(
      favPhotos.includes(photoId)
        ? favPhotos.filter((fave) => fave !== photoId) // returns an array without photoId
        : [...favPhotos, photoId] // if photoId: 4, from: [1, 2, 3] => [1, 2, 3, 4]
    );
    // const newFavPhotos = favPhotos.includes(photoId)
    //   ? favPhotos.filter((fave) => fave !== photoId)
    //   : [...favPhotos, photoId];
    // setFavPhotos(newFavPhotos);

    // if (favPhotos.includes(photoId)) {
    //   let newFavPhotoList = [...favPhotos]; // copying stateObject
    //   // console.log("before filterList:", newFavPhotoList);
    //   newFavPhotoList = newFavPhotoList.filter((favouritedPhotoId) => favouritedPhotoId !== photoId);
    //   // console.log("after filterList:", newFavPhotoList);
    //   setFavPhotos(newFavPhotoList);
    // } else {
    //   const newArray = [...favPhotos];
    //   newArray.push(photoId);
    //   setFavPhotos(newArray);
    // }
  };
  console.log(favPhotos);
  
  return (
    <div className="home-route">
      <TopNavigationBar topics = {topics} favPhotoCount={favPhotos.length} />
      <PhotoList photos={photos} toggleFav={toggleFav} favouritedPhotos={favPhotos} />
    </div>
  );
};

export default HomeRoute;
