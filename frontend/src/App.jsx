import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import './App.scss';

// Note: Rendering a single component to build components in isolation


const App = () => {
  return ( // <PhotoList/> that will render multiple <PhotoListItem/> and PhotoList component is passing in the sample data directly into the PhotoListItem components
    <div className="App">
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;