import React from 'react';
import './MainContent.styles.scss';

import { Row, Col } from 'antd';

import KundaliContainer from './../KundaliContainer/KundaliContainer.component';
import KundaliInfo from './../KundaliInfo/KundaliInfo.component';

const MainContent = (props) => {

  return (
    <div className="main-content">
      <Row type = "flex">
        
        <Col xs = {24} md = {12} lg = {10} xxl = {9} >
          <KundaliContainer />
        </Col>

        <Col xs = {24} md = {12} lg = {14} xxl = {15} >
          <KundaliInfo />
        </Col>
      
      </Row>
    </div>
  )
}

export default MainContent;
