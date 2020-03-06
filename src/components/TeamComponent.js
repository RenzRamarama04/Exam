import React,{ Component} from "react";
import {  MDBRow,  MDBCard, MDBCardBody, MDBIcon, MDBCol, MDBCardImage, MDBView, MDBMask, MDBCardTitle, MDBCardText} from "mdbreact";
import {get} from 'lodash';

class TeamComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      item: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ data })
      });
      fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
      .then(response => response.json())
      .then(item => {
        this.setState({ item })
      });
  }
  render() {
console.log(this.state.item)
    return (
      <MDBRow> 
          { this.state.data.map((d, i)=>
        <MDBCol style={{marginBottom: 10}} md="3">
            <MDBCard personal className="mb-md-0 mb-4">
            <MDBView hover>
              <MDBCardImage
                top
                src={d.thumbnailUrl}
                alt="MDBCard image cap"
              />
                <MDBMask overlay="white-slight" />
            </MDBView>
            <MDBCardBody>
            <MDBCardTitle>
              {get(this.state.item, `[${i}].name`)}
              </MDBCardTitle>
              <MDBCardText>
                {d.title}
              </MDBCardText>
              <hr />
                <span>
                  <MDBIcon icon="user" />
                  50 Connection
                </span>
                <MDBCardText>
                  {get(this.state.item, `[${i}].email`)}
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

export default TeamComponent;