import bgImage from '../../assets/image/systemBackground.jpg';

const styles = {
  outerContainer: {
    flex: 1,
    minHeight: '100vh',
    width: '100vw',
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  titleTxt: { color: 'white', marginLeft: 10 },
  iconTitle: { color: 'white', marginRight: 10},
  imgSize: {width: '200px', height: '200px'},
  };
  
  export default styles;
  