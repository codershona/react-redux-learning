import React from 'react';
import Counter from '../components/counter';
import { CountProvider } from '../provider/count-provider';

const App = () => {

  return(
    <CountProvider>
    <div className='container my-3'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h2 className='text-center'>
            This is Context + Hooks called Forget Redux
          </h2>
          <Counter
           />
        </div>
      </div>
    </div>
    </CountProvider>
  );
};


export default App;
