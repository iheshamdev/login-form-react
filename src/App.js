import React from 'react';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import Register from './components/register';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
}

export default App;
