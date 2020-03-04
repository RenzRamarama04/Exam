import bgImage from '../../assets/image/systemBackground.jpg';
const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  facebook: {
    height: '20px',
    width: '20px'
  },
  signUpfb: {
    color: 'white',
    fontSize: '12px',
    fontFamily: 'GothamBold',
  },
  facebookButton: {
    height: '35px',
    width: '100%',
    backgroundColor: '#3B5998',
    borderRadius: 4,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 13px 26px'
  },
  label: {
    fontSize: "11px",
    fontFamily: "GothamBold",
    color: "white"
  },
  signUpTxt: {
    color: "white",
    fontSize: "35px",
    lineHeight: "normal",
    fontFamily: "GothamBold"
  },
  toast: {
    color: 'white',
  },
  line: {
    borderTop: '1px solid white',
    opacity: '0.5'
  },
  textField: {
    fontSize: ".8rem",
    fontColor: "#a7a8a8",
    height: "30px",
  },
  signupContainer: {
    background: '#00000088',
    borderRadius: '10px',
  },
};

export default styles;