import React from 'react';
import { HashRouter } from 'react-router-dom';
import MyRoutes from './MyRoutes';

function App() {
  return (
    <HashRouter>
      <MyRoutes />
    </HashRouter>
  );
}

export default App;