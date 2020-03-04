import React, { PureComponent } from 'react';
import styles from './Profile.style';
import {  MDBRow,  MDBCard, MDBCardBody,  MDBIcon, MDBCol, MDBCardImage, MDBCardText, MDBCardTitle } from "mdbreact";

import NavigationBar from '../../components/NavationBar';
import profilePic from '../../assets/image/profilePic.jpg'
class Profile extends PureComponent {
  render() {
    return (
      <div style={styles.outerContainer}>
            <NavigationBar />
            <h1 style={styles.titleTxt}>Profile</h1>
      <MDBCol md="6" lg="5">
          <MDBCardImage
          style={styles.imgSize}
            top
            src={profilePic}
            alt="MDBCard image cap"
          />
          <MDBCardBody>
            <MDBCardTitle style={styles.titleTxt}>
                Renz Ramarama
            </MDBCardTitle>
            <p style={styles.titleTxt} className="card-meta">Front-end Developer</p>
            <MDBCardText style={styles.titleTxt}>Renz is looking for a company that will enchance more of is knowledge at developing and willing to be a full stack developer someday! :)</MDBCardText>
            <hr />
              <span style={styles.titleTxt}>
                <MDBIcon style={styles.iconTitle} icon="user" />
                22 Applied
              </span>
          </MDBCardBody>
      </MDBCol>
    </div>
    );
  }
}

export default Profile;
