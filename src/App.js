// App.js - Optional
import React from 'react';
import AppRouter from './routes/AppRouter';

const App = () => {
  // You can include any global configurations or context providers here if needed

  return (
    <div className="app">
      <AppRouter />
    </div>
  );
};

export default App;
