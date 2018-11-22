import React from 'react';

import './Spinner.css';

const Spinner = () => {
  return (
   <div className='align-center'>
      <div className="lds-css ng-scope">
        <div className="lds-ball"><div></div>
        </div>
      </div>
    </div>

  )
}


 
 
export default Spinner
