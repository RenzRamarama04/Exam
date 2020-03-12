import React,{ Component} from "react";
import { connect } from "react-redux";
import {  MDBRow,  MDBCard, MDBCardBody, MDBIcon, MDBCol, MDBCardImage, MDBView, MDBMask, MDBCardTitle, MDBCardText} from "mdbreact";
import {get} from 'lodash';
import { getSocialImg } from '../store/actions/social';

class TeamComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      item: [],
    };
  }
  componentDidMount=()=> {
      const {onFetchSocialImg} = this.props;
      onFetchSocialImg()

      fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
      .then(response => response.json())
      .then(item => {
        this.setState({ item })
      });
  }
  render() {
console.log(this.props.photos,'Hello')
    const {photos} = this.props;
    console.log(this.state.item, photos, 'helloooo')

    return (
      <MDBRow> 
          { this.state.item.map((d, i)=>
        <MDBCol style={{marginBottom: 10}} md="3">
            <MDBCard personal className="mb-md-0 mb-4">
            <MDBView hover>
              <MDBCardImage
                top
                src={photos[i].thumbnailUrl}
                alt="MDBCard image cap"
              />
                <MDBMask overlay="white-slight" />
            </MDBView>
            <MDBCardBody>
            <MDBCardTitle>
              {d.name}
              </MDBCardTitle>
              <MDBCardText>
                {photos[i].title}
              </MDBCardText>
              <hr />
                <span>
                  <MDBIcon icon="user" />
                  50 Connection
                </span>
                <MDBCardText>
                  {d.email}
                </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
          )
  } 
      </MDBRow>
    );
  }
}

const mapStateToProps = state => ({
photos: state.social.photos,
});

const mapDispatchToProps = dispatch => ({
  onFetchSocialImg: data => { dispatch(getSocialImg(data)) },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamComponent);