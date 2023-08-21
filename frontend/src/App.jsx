import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const App = () => {
  return (
    <div className="App">
      <PhotoList // child component
        key={sampleDataForPhotoListItem.id}
        imageSource={sampleDataForPhotoListItem.imageSource}
        profile={sampleDataForPhotoListItem.profile}
        username={sampleDataForPhotoListItem.username}
        city={sampleDataForPhotoListItem.location.city}
        country={sampleDataForPhotoListItem.location.country}
      />
    </div>
  );
};

export default App;
