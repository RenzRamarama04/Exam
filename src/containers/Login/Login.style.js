import bgImage from '../../assets/image/login.jpg';

const styles = {
  outerContainer: {
    flex: 1,
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    height: '93vh'
  },
  loginContainer: {
    background: '#00000088',
    borderRadius: '25px',
  },
  loginButton: {
    background: '#F3F3F3',
    height: '35px',
    fontSize: '12px',
    width: '100%',
    fontFamily: 'GothamBold',
    color: 'black',
  },
  forgotPassword: {
    color: 'white',
    fontSize: '12px',
    textDecoration: 'underline',
  },
  loginHere: {
    color: "white",
    fontSize: "35px",
    lineHeight: "normal",
    fontFamily: "GothamBold"
  },
  label: {
    fontSize: "11px",
    fontFamily: "GothamBold",
    color: "white"
  },
  textField: {
    fontSize: ".8rem",
    fontColor: "#a7a8a8",
    height: "30px",
  },
  toast: {
    color: 'white',
  },
};

export default styles;
