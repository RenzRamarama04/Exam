import React, { PureComponent } from 'react';
// import { NavLink } from 'react-router-dom';
import styles from './Profile.style';

import Text from '../../components/Text';
import NavigationBar from '../../components/NavationBar';

class Profile extends PureComponent {
  render() {
    return (
      <div style={styles.outerContainer}>
            <NavigationBar />
      </div>
    );
  }
}

export default Profile;
