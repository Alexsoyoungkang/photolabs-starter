import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

const HomeRoute = () => { // topics = {topics} = props
  return (
    <div className="home-route">
      <TopNavigationBar topics = {topics} />
      <PhotoList photos = {photos} />
    </div>
  );
};

export default HomeRoute;
