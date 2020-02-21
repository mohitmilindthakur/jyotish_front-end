import React from 'react';

import './KundaliControl.styles.scss';

import { Row, Col } from 'antd';

import {connect} from 'react-redux';
import {selectUserAuth} from './../../redux/currentUser/currentUser.selectors.js';

import OpenKundaliBtn from './../OpenKundaliBtn/OpenKundaliBtn.component';
import NewKundaliBtn from './../NewKundaliBtn/NewKundaliBtn.component';
import EditKundaliBtn from './../EditKundaliBtn/EditKundaliBtn.component';
import SaveKundaliBtn from './../SaveKundaliBtn/SaveKundaliBtn.component';
import ShareKundaliBtn from './../ShareKundaliBtn/ShareKundaliBtn.component';
import DownloadKundaliBtn from './../DownloadKundaliBtn/DownloadKundaliBtn.component';

const KundaliControl = ({userAuth}) => {

    return (
      <React.Fragment>
        <Row type = "flex" justify = "space-around">

          {userAuth && (<Col>
            <OpenKundaliBtn />
          </Col>)}

          <Col>
            <NewKundaliBtn />
          </Col>

          <Col>
            <EditKundaliBtn />
          </Col>

          {userAuth && (<Col>
            <SaveKundaliBtn />
          </Col>)}

          <Col>
            <ShareKundaliBtn />
          </Col>

          <Col>
            <DownloadKundaliBtn />
          </Col>

        </Row>
      </React.Fragment>
    );
  }

const mapStateToProps = (state) => ({
  userAuth: selectUserAuth(state)
})

export default connect(mapStateToProps)(KundaliControl);