import React from 'react';
import './App.css';

import RouterPage from './RouterPage';

function App() {
  return (
    <>
    {/* <p className="paraCSS">
        &nbsp;
        <span>
          Welcome to <b>Panjabi Kitchen</b>
        </span>
        
      </p> */}
    <div>
      <RouterPage />
    </div>
    <p className="paraCSSEnd">
        <span>
          <small>
            &copy; Copyright {new Date().getFullYear()}, Khushboo Chaurasiya
          </small>
        </span>
      </p>
    </>
  );
}

export default App;
