import React, {useState} from 'react';

import {RootNavigator} from './navigation';
import {ShortCodeContext} from './context';

const App = () => {
  const [shortCode, setShortCode] = useState('');

  return (
    <ShortCodeContext.Provider value={{shortCode, setShortCode}}>
      <RootNavigator />
    </ShortCodeContext.Provider>
  );
};
export default App;
