import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from '../redux/store';
import AppNavigation from './navigation';

const client = new QueryClient({
  defaultOptions: {queries: {refetchInterval: 3000}},
});

const Root = () => {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </QueryClientProvider>
  );
};

export default Root;
