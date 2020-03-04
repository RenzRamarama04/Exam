import React, { PureComponent } from 'react';
import { Redirect, NavLink } from 'react-router-dom';

import { MDBRow, MDBCol } from 'mdbreact';
import RoundedButton from '../../components/RoundedButton';
import RoundedTextInput from '../../components/RoundedTextInput';
import Text from '../../components/Text';
import styles from './Signup.style';
import RoundedCheckbox from '../../components/RoundedCheckbox';
import SelectListGroup from '../../components/SelectListGroup';

class Signup extends PureComponent {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNum: '',
    password: '',
    username: '',
    gender: '',
    signupVisible: 'd-none',
    birthMonth: '',
    birthYear: '',
    birthDay: '',
    accepted: false,
  };

  HandleSignupShow = () => {
    const { signupVisible } = this.state;
    signupVisible === 'd-none'
      ? this.setState({ signupVisible: 'd-flex' })
      : this.setState({ signupVisible: 'd-none' });
  };
  
  render() {
    const {
      firstName,
      lastName,
      email,
      phoneNum,
      username,
      password,
      confirmPassword,
      gender,
      signupVisible,
      accepted,
    } = this.state;

    return (
      <div
        style={styles.container}
      >
        <MDBRow
          className="mr-0 d-flex justify-content-center align-items-center py-5"
          style={{ minHeight: '93vh' }}
        >
          <MDBCol lg="6" md="6" sm="6" className="col-10 pr-0">
            <MDBRow className="d-flex justify-content-center align-items-center">
              <Text className="text-center" style={styles.signUpTxt}>
                Sign up here!
              </Text>
            </MDBRow>
            <MDBRow className="d-flex justify-content-center align-items-center">
              <MDBCol lg="6">
                <MDBRow className="mx-0 my-1">
                  <RoundedButton
                  onClick={() => {
                    this.HandleSignupShow();
                  }}
                    className={`${signupVisible=="d-flex" ? "d-none" : "d-flex" }`}
                    title="Sign Up with Email"
                    color="white"
                    height="35px"
                    fontSize="12px"
                    fontColor="#606060"
                    boxShadow="rgba(0, 0, 0, 0.5) 0px 13px 26px"
                  />
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <MDBRow
              style={styles.signupContainer}
              className={`px-3 py-2 ${signupVisible}`}
            >
              <MDBCol>
                <MDBRow className="my-1">
                  <MDBCol md="6" className="d-inline">
                    <Text className="mb-1 ml-1" style={styles.label}>First Name</Text>
                    <RoundedTextInput
                      value={firstName}
                      onChange={text => this.setState({ firstName: text })}
                      placeholder="Enter your first name here..."
                      className="w-100 rounded pl-2"
                      style={styles.textField}
                    />
                  </MDBCol>
                  <MDBCol md="6" className="d-inline mr-0">
                    <Text className="mb-1 ml-1" style={styles.label}>Last Name</Text>
                    <RoundedTextInput
                      value={lastName}
                      onChange={text => this.setState({ lastName: text })}
                      className="w-100 rounded pl-2"
                      placeholder="Enter your last name here..."
                      style={styles.textField}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6" className="d-inline">
                    <Text className="mb-1 ml-1" style={styles.label}>Email</Text>
                    <RoundedTextInput
                      value={email}
                      onChange={text => this.setState({ email: text })}
                      placeholder="Enter your email here..."
                      className="w-100 rounded pl-2"
                      style={styles.textField}
                    />
                  </MDBCol>
                  <MDBCol md="6" className="form-group d-inline my-1 mr-0">
                    <Text className="mb-1 ml-1" style={styles.label}>Gender</Text>
                    <SelectListGroup
                      options={[
                        { label: 'Select your gender here...', value: 'none' },
                        { label: 'Male', value: 'MALE' },
                        { label: 'Female', value: 'FEMALE' },
                      ]}
                      value={gender}
                      onChange={text => {
                        this.setState({ gender: text });
                      }}
                      initialValue="none"
                      className="w-100 rounded pl-2"
                      style={styles.textField}
                    />
                  </MDBCol>
                  <MDBCol md="6" className="d-inline mr-0">
                  <Text className="mb-1 ml-1" style={styles.label}>Mobile Number</Text>
                    <RoundedTextInput
                      value={phoneNum}
                      onChange={text => this.setState({ phoneNum: text })}
                      placeholder="Enter your mobile number here..."
                      className="w-100 rounded pl-2"
                      style={styles.textField}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol className="my-1">
                    <Text className="mb-1 ml-1" style={styles.label}>Username</Text>
                    <RoundedTextInput
                      value={username}
                      onChange={text => this.setState({ username: text })}
                      placeholder="Enter your username here..."
                      className="w-100 rounded pl-2"
                      style={styles.textField}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol className="my-1">
                  <Text className="mb-1 ml-1" style={styles.label}>Password</Text>
                    <RoundedTextInput
                      value={password}
                      onChange={text => this.setState({ password: text })}
                      placeholder="Enter your password here..."
                      className="w-100 rounded pl-2"
                      style={styles.textField}
                      password
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol className="my-1">
                    <Text className="mb-1 ml-1" style={styles.label}>Confirm Password</Text>
                    <RoundedTextInput
                      value={confirmPassword}
                      onChange={text =>
                        this.setState({ confirmPassword: text })
                      }
                      placeholder="Enter your password here..."
                      className="w-100 rounded pl-2"
                      style={styles.textField}
                      password
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center align-items-center my-1">
                  <MDBCol
                    lg="6"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <RoundedCheckbox 
                      onClick={()=>{this.setState({ accepted: !accepted });}} 
                      clicked={accepted}
                    />
                    <Text className="mb-0" style={styles.label}>
                      I Accept Bliimo's Terms and Services
                    </Text>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center align-items-center my-3">
                  <MDBCol lg="4">
                  <NavLink className="w-100" exact to="/Login">
                    <RoundedButton
                      title="Sign Up"
                      color="blue"
                      height="35px"
                      fontSize="12px"
                      fontColor="white"
                    />
                    </NavLink>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex justify-content-center align-items-center">
              <MDBCol lg="6">
                <MDBRow className="d-flex justify-content-center">
                  <MDBCol
                    className="m-4"
                    style={styles.line}
                    md="5"
                  />
                </MDBRow>
                <MDBRow className="mx-0">
                  <NavLink className="w-100" exact to="/Login">
                    <RoundedButton
                      title="Login"
                      color={`${signupVisible === 'd-flex' ? "white" : "blue" }`}
                      height="35px"
                      fontSize="12px"
                      boxShadow="rgba(0, 0, 0, 0.5) 0px 13px 26px"
                      fontColor={`${signupVisible === 'd-flex' ? "gray" : "white" }`}
                    />
                  </NavLink>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Signup;
