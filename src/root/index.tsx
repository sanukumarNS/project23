import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import AppNavigation from './navigation';

const client = new QueryClient({
  defaultOptions: {queries: {refetchInterval: 3000}},
});

const Root = () => {
  return (
    <QueryClientProvider client={client}>
      <AppNavigation />
    </QueryClientProvider>
  );
};

export default Root;
