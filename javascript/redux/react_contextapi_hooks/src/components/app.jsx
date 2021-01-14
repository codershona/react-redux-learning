import React from 'react';

import MyHook from './hooks';
import {UserProvider} from './userContext';


const App = () => {
  return(
  <UserProvider>
      <div className='container'>
      <div className='row'>
        <div className='col-sm-6 offset-sm-3'>
          <h1 className='mt-3'>
            React Hooks Learning
          </h1>
          <hr />
          <MyHook/>
        </div>
      </div>
    </div>
  </UserProvider>
  );
};

export default App;
