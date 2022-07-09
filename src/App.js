import React, {useState} from 'react';

import {RootNavigator} from './navigation';
import {LocationContext, ShortCodeContext} from './context';

const App = () => {
  const [shortCode, setShortCode] = useState('');
  const [location, setLocation] = useState(null);

  return (
    <LocationContext.Provider value={{location, setLocation}}>
      <ShortCodeContext.Provider value={{shortCode, setShortCode}}>
        <RootNavigator />
      </ShortCodeContext.Provider>
    </LocationContext.Provider>
  );
};
export default App;
