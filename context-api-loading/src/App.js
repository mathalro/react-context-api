import React, { useState } from 'react';
import Departments from './components/Departments';
import Loading from './components/Loading';
import Users from './components/Users';
import { LoadingProvider } from './store/state/loading-provider';

const App = () => {
  return (
    <LoadingProvider>
      <Users />
      <Departments />
      <Loading />
    </LoadingProvider>
  );
}

export default App;
