import React from 'react';
import './Toolbar.styles.scss';
import CreateNewKundaliBtn from './../CreateNewKundaliBtn/CreateNewKundaliBtn.component';


const Toolbar = (props) => {
  

  return (
    <div className="toolbar">
      <CreateNewKundaliBtn  />
    </div>
  )
}

export default Toolbar;
