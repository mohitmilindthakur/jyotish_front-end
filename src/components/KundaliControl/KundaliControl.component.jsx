import React from 'react';

import './KundaliControl.styles.scss';

import { Row, Col } from 'antd';

import {connect} from 'react-redux';
import {selectUserAuth} from './../../redux/currentUser/currentUser.selectors.js';
import {selectAllUserKundalis} from './../../redux/currentUser/currentUser.selectors.js';

import OpenKundaliBtn from './../OpenKundaliBtn/OpenKundaliBtn.component';
import NewKundaliBtn from './../NewKundaliBtn/NewKundaliBtn.component';
import EditKundaliBtn from './../EditKundaliBtn/EditKundaliBtn.component';
import SaveKundaliBtn from './../SaveKundaliBtn/SaveKundaliBtn.component';
import ShareKundaliBtn from './../ShareKundaliBtn/ShareKundaliBtn.component';
import DownloadKundaliBtn from './../DownloadKundaliBtn/DownloadKundaliBtn.component';

class KundaliControl extends React.Component {

  componentDidUpdate () {
    
  }

  render () {
    const {userAuth, allKundalis} = this.props;
    return (
      <React.Fragment>
        <Row type = "flex" justify = "space-around">

          {userAuth && allKundalis && !!allKundalis.length && (<Col>
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
}

const mapStateToProps = (state) => ({
  userAuth: selectUserAuth(state),
  allKundalis: selectAllUserKundalis(state),
})

export default connect(mapStateToProps)(KundaliControl);