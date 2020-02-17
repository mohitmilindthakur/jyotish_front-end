import React from 'react';
import './MainContent.styles.scss';

import { Row, Col } from 'antd';

import KundaliContainer from './../KundaliContainer/KundaliContainer.component';
import KundaliInfo from './../KundaliInfo/KundaliInfo.component';

const MainContent = (props) => {

  return (
    <div className="main-content">
      <Row type = "flex">
        
        <Col span = {12} >
          <KundaliContainer />
        </Col>

        <Col span = {12} >
          <KundaliInfo />
        </Col>
      
      </Row>
    </div>
  )
}

export default MainContent;
