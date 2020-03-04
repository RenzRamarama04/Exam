import React, { PureComponent } from 'react';
// import { NavLink, Router } from 'react-router-dom';

import styles from './Home.style';
import Banner from '../../components/Banner';
import NavigationBar from '../../components/NavationBar';
import CarouselItem from '../../components/CarouselItem';
import Text from '../../components/Text';

class Home extends PureComponent {
  componentWillUnmount(){
    window.localStorage.setItem('isLoggedin', false);
  }
  render() {
    return (
      <div style={styles.outerContainer}>
        <NavigationBar />
        <div style={{marginTop: 10}}>
          <Banner />
        </div>
        <CarouselItem />
      </div>
    );
  }
}

export default Home;
