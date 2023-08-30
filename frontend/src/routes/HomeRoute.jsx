import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => { // topics = {topics} = props
  return (
    <div className="home-route">
      <TopNavigationBar topics ={props.topics} topic={props.topic} ACTIONS={props.ACTIONS} dispatch={props.dispatch} favPhotoCount={props.favouritedPhotos.length} />
      <PhotoList photos={props.photos} toggleFav={props.toggleFav} favouritedPhotos={props.favouritedPhotos} openModal={props.openModal}/>
    </div>
  );
};

export default HomeRoute;
