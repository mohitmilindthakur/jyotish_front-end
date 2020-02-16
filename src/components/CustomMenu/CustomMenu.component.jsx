import React from 'react';
import './CustomMenu.styles.scss';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const CustomMenu = (props) => {
  return (
    <div className="custom-menu-container">
      <div className="custom-menu">
        <ArrowDropUpIcon className="custom-menu__caret"/>
        {props.children}
      </div>
    </div>
  );
}

export default CustomMenu;
