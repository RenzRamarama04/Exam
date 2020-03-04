import React, { PureComponent } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import { NavLink } from 'react-router-dom';

import styles from './Application.style';

class Application extends PureComponent {
  render() {
    return (
      <div style={styles.outerContainer}>
<MDBContainer>
      <form style={{width: '50%', margin: 'auto'}}>
        <p className="h5 text-center mb-4">Apply with us!</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <div className="text-center">
        <NavLink to="/" >
          <MDBBtn onClick={()=>alert("Application Sent!")} outline color="secondary">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
          </NavLink>
        </div>
      </form>
</MDBContainer>
      </div>
    );
  }
}

export default Application;
