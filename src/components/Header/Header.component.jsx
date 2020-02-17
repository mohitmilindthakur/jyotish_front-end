import React from 'react';

import './Header.styles.scss';

import { Row, Col } from 'antd';

import KundaliControl from './../KundaliControl/KundaliControl.component';
import UserControl from './../UserControl/UserControl.component';
import BirthDetailsInfoOnToolbar from './../BirthDetailsInfoOnToolbar/BirthDetailsInfoOnToolbar.component';


const Header = (props) => {
    return (
      <div className = "header">
        <Row type = "flex" justify = "start" align = "middle">

          <Col sm = {8} xs = {16}>
            <KundaliControl />
          </Col>

          <Col sm = {12} xs = {0}>
              <BirthDetailsInfoOnToolbar />
          </Col>

          <Col sm = {4} xs = {8} >
            <UserControl />
          </Col>

        </Row>
      </div>
    );
}

export default Header;
