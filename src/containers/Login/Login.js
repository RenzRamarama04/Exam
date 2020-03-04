import React, { PureComponent } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { MDBRow, MDBCol } from 'mdbreact';
import Text from '../../components/Text';
import RoundedTextInput from '../../components/RoundedTextInput';
// import Header from '../Header/Header';

import styles from './Login.style';

class Login extends PureComponent {
  state = {
    usernameOrEmail: '',
    password: '',
  };

  render() {
    const { usernameOrEmail, password } = this.state;
    return (
      <div style={styles.outerContainer}>
        {/* <Header /> */}
        <MDBRow
          className="mr-0 d-flex justify-content-center align-items-center"
          style={styles.container}
        >
          <ToastContainer style={styles.toast} />
          <MDBCol md="4" sm="6" className="pr-0">
            <MDBRow className="d-flex justify-content-center">
              <Text className="text-center" style={styles.loginHere}>
                Log in here!
              </Text>
            </MDBRow>
            <MDBCol
              className="p-4"
              style={styles.loginContainer}
            >
              <Text className="mb-1 ml-1" style={styles.label}>Email or Username</Text>
              <RoundedTextInput
                value={usernameOrEmail}
                onChange={text => this.setState({ usernameOrEmail: text })}
                placeholder="Enter your email or username here..."
                className="w-100 rounded pl-2 mb-3"
                style={styles.textField}
              />
              <Text className="mb-1 ml-1" style={styles.label}>Password</Text>
              <RoundedTextInput
                value={password}
                onChange={text => this.setState({ password: text })}
                placeholder="Enter your password here..."
                className="w-100 rounded pl-2"
                style={styles.textField}
                password
              />
              <MDBRow className="d-flex justify-content-center align-items-center mt-3 mb-2">
                <NavLink to="/forgotpassword">
                  <span
                    className="font-italic"
                    style={styles.forgotPassword}
                  >
                    Forgot Password
                  </span>
                </NavLink>
              </MDBRow>
              <MDBRow className="mx-1 d-flex justify-content-center align-items-center">
                <NavLink to="/" >
                <button
                onClick= {()=>{
                  window.localStorage.setItem('isLoggedin', true);
                  window.localStorage.setItem('loggedInbtnClick', true);
                }}
                  className="rounded"
                  style={styles.loginButton}
                >
                  Login
                </button>
                </NavLink>
              </MDBRow>
              <MDBRow className="mx-1 d-flex justify-content-center align-items-center">
                <NavLink to="/Signup" >
                <button
                  className="rounded"
                  style={styles.loginButton}
                >
                  Signup
                </button>
                </NavLink>
              </MDBRow>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}


export default Login;
