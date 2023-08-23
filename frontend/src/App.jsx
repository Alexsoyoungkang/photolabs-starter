import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import './App.scss';

// Note: Rendering a single component to build components in isolation


const App = () => {
  return ( // <PhotoList/> that will render multiple <PhotoListItem/> and PhotoList component is passing in the sample data directly into the PhotoListItem components
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;