import React from 'react';
import AppHeader from './components/appHeader/AppHeader';
import Dashboard from './components/dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <Dashboard />
    </>
  );
};

export default App;
