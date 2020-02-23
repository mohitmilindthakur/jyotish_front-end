import React from 'react';
import './MainContent.styles.scss';

import { Row, Col } from 'antd';

import {connect} from 'react-redux';

import KundaliContainer from './../KundaliContainer/KundaliContainer.component';
import KundaliInfo from './../KundaliInfo/KundaliInfo.component';

import {selectKundaliSettings} from './../../redux/kundaliSettings/kundaliSettings.selectors.js';
import {selectBirthDetails} from './../../redux/birthDetails/birthDetails.selectors.js';
import {fetchKundaliFromServerAsync} from './../../redux/kundali/kundali.actions';


class MainContent extends React.Component {

  componentDidMount() {
    const {setKundali, birthDetails, kundaliSettings} = this.props;
    setKundali(birthDetails, kundaliSettings);
  }

  render () {

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
}

const mapStateToProps = (state) => ({
  birthDetails: selectBirthDetails(state),
  kundaliSettings: selectKundaliSettings(state),
})

const mapDispatchToProps = (dispatch) => ({
  setKundali: (birthDetails, kundaliSettings) => dispatch(fetchKundaliFromServerAsync(birthDetails, kundaliSettings))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);