import React from 'react';

import './KundaliControl.styles.scss';

import { Row, Col } from 'antd';

import NewKundaliBtn from './../NewKundaliBtn/NewKundaliBtn.component';
import EditKundaliBtn from './../EditKundaliBtn/EditKundaliBtn.component';
import SaveKundaliBtn from './../SaveKundaliBtn/SaveKundaliBtn.component';
import ShareKundaliBtn from './../ShareKundaliBtn/ShareKundaliBtn.component';
import DownloadKundaliBtn from './../DownloadKundaliBtn/DownloadKundaliBtn.component';

const KundaliControl = (props) => {

    return (
      <React.Fragment>
        <Row type = "flex" justify = "space-around">

          <Col>
            <NewKundaliBtn />
          </Col>

          <Col>
            <EditKundaliBtn />
          </Col>

          <Col>
            <SaveKundaliBtn />
          </Col>

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

export default KundaliControl;
