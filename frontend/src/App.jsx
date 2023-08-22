import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation


const App = () => {
  return ( // <PhotoList/> that will render multiple <PhotoListItem/> and PhotoList component is passing in the sample data directly into the PhotoListItem components
    <div className="App">
      <PhotoList />
    </div>
  );
};

export default App;