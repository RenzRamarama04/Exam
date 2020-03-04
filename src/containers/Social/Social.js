import React, { PureComponent } from 'react';
// import { NavLink } from 'react-router-dom';
import styles from './Social.style';
import {  MDBRow, MDBCol } from "mdbreact";
import TeamComponent from '../../components/TeamComponent';

import Text from '../../components/Text';
import NavigationBar from '../../components/NavationBar';
class Social extends PureComponent {
  render() {
    return (
      <div style={styles.outerContainer}>
            <NavigationBar />
            <h1 style={styles.titleTxt}>Social Wall</h1>
            <TeamComponent />
      </div>
    );
  }
}

export default Social;
