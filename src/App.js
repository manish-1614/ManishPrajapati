import React from 'react';
import { HashRouter } from 'react-router-dom';
import RouteDefinitions from './RouteDefinitions';

function App() {
  return (
    <HashRouter>
      <RouteDefinitions />
    </HashRouter>
  );
}

export default App;