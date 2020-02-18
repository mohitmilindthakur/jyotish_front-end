import React from 'react';
import './KundaliInfo.styles.scss';

import BirthDetailsForm from './../BirthDetailsForm/BirthDetailsForm.component';

const KundaliInfo = (props) => {

  return (
    <div style = {{height: '100%', border: '1px solid purple'}} >
      <BirthDetailsForm />
    </div>
  );
}

export default KundaliInfo;
