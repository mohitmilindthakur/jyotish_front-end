import React from 'react';
import './UserProfile.styles.scss';
import PersonIcon from '@material-ui/icons/Person';
import CustomMenu from './../CustomMenu/CustomMenu.component';
import {Menu, MenuItem} from '@material-ui/core';


class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      anchorEl: ''
    }
  }

  handleClose = (event) => {
    this.setState({anchorEl: null});
  }

  handleClick = (event) => {
    this.setState({anchorEl: event.currentTarget});
  }

  render() {
    return (
      <React.Fragment>
        <PersonIcon onClick = {this.handleClick} ></PersonIcon>
        <Menu
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
}

export default UserProfile;
