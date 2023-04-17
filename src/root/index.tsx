import React, {createContext, useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from '../redux/store';
import AppNavigation from './navigation';

const client = new QueryClient({
  defaultOptions: {queries: {refetchInterval: 3000}},
});

// Stores the app version
export const AppContext = createContext({version: '1', setVersion: () => {}});

const Root = () => {
  const [appVersion, setAppVersion] = useState('2.4');
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <AppContext.Provider
          value={{version: appVersion, setVersion: setAppVersion}}>
          <AppNavigation />
        </AppContext.Provider>
      </Provider>
    </QueryClientProvider>
  );
};

export default Root;
