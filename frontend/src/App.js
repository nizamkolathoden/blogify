import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom'
import Login from './components/login';
import Signup from './components/signup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Route path="/login">
      <Login/>
      </Route>
      <Route path="/signup">
      <Signup/>
      </Route>
      </BrowserRouter>
    
            
    </div>
  );
};

export default App;