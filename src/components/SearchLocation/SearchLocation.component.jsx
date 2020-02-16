import React, {Fragment} from 'react';
import './SearchLocation.styles.scss';
import axios from 'axios';
import {TextField, Grid, ClickAwayListener} from '@material-ui/core';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();


class SearchLocation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      requestURLS: [],
      isDisplayLocations: false,
      locations: [],
    }
  }

  getLocation = (event) => {
    event.preventDefault();
    let place = this.props.place;
    if (place.length > 3){
      if (!this.state.isDisplayLocations) {
        this.setState({isDisplayLocations: true});
      }
      axios.get(`http://localhost:5000/getLocation?location=${place}`)
      .then(data => {
        this.setState({locations: data.data});
      });
    }
  }

  closeLocationsList = () => {
    this.setState({isDisplayLocations: false})
    this.setState({locations: []});
  }

  selectLocation = (location) => {
    console.log(location);
    let {lat, lng, formatted} = location;
    // this.setState({isDisplayLocations: false});
    this.closeLocationsList();
    this.props.setLocation(formatted, {lat, lng});
  }

  render() {
    return (
      <Fragment>

        {/* <Grid container justify = "space-around" align = "center"> */}
          <ClickAwayListener onClickAway = {this.closeLocationsList} >
            <TextField
            name="place" label="Place" variant="outlined" onChange = {this.props.handleChange} value = {this.props.place} required className = "search-input" onKeyUp = {this.getLocation} />
          {/* <button onClick = {this.getLocation} >Search</button> */}
          </ClickAwayListener>

        {/* </Grid> */}

        <div style = {{position: 'relative'}}>
          <div className = "searched-locations">
          {
            this.state.isDisplayLocations && this.state.locations.map(location => (
                <div onClick = {this.selectLocation.bind(this, location)} className = "searched-locations__item">{location.formatted}</div>
              )
            )
          }
          </div>
        </div>

      </Fragment>
    );
  }
}

export default SearchLocation;
