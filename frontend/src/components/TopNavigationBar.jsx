import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topics">
        <TopicList topics={props.topics} topic={props.topic} dispatch={props.dispatch} ACTIONS={props.ACTIONS} />
      </div>
      <FavBadge favPhotoCount={props.favPhotoCount} />
    </div>
  );
};

export default TopNavigation;