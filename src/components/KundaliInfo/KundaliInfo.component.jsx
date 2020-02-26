import React from 'react';
import './KundaliInfo.styles.scss';

import {Row, Col} from 'antd';

import GrahaInfo from './../GrahaInfo/GrahaInfo.component';

const KundaliInfo = (props) => {

  return (
    <div className = "kundali-info">
      <Row type = "flex" className = "height-100">
        <Col xl = {16} xxl = {12} lg = {24} >
          <GrahaInfo />
        </Col>

      </Row>
    </div>
  );
}

export default KundaliInfo;
