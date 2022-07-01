import React from 'react';
import {render} from '@testing-library/react-native';

import {ShortCodeContext} from '../context';

const withAllProviders = options => {
  const providers = ({children}) => (
    <ShortCodeContext.Provider value={{...options.shortCode}}>
      {children}
    </ShortCodeContext.Provider>
  );
  return providers;
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
