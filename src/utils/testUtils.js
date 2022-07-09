import React from 'react';
import {render} from '@testing-library/react-native';

import {LocationContext, ShortCodeContext} from '../context';

const withAllProviders = options => {
  return ({children}) => (
    <LocationContext.Provider value={{...options.location}}>
      <ShortCodeContext.Provider value={{...options.shortCode}}>
        {children}
      </ShortCodeContext.Provider>
    </LocationContext.Provider>
  );
};

export const renderWithProviders = (ui, options) => {
  const childContext = options.childContext;

  return render(ui, {
    wrapper: withAllProviders({
      ...childContext,
    }),
    ...options,
  });
};
