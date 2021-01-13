import React, { useState } from 'react';
import Counter from '../components/counter';

const App = () => {
  const [counting, setCounting] = useState(0);

  return(
    <div className='container my-3'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h2 className='text-center'>
            This is Context + Hooks called Forget Redux
          </h2>
          <Counter
            counts={counting}
            increasing={() => setCounting(counting + 1)}
            decreasing={() => setCounting(counting - 1)}
            reseting={() => setCounting(0)}
           />
        </div>
      </div>
    </div>

  );
};


export default App;
