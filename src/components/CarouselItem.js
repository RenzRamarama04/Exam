import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import carouselImg from '../assets/image/C.png';
import carouselImg1 from '../assets/image/html.png';
import carouselImg2 from '../assets/image/java.png';
import carouselImg3 from '../assets/image/php.png';
import carouselImg4 from '../assets/image/python.png';
import carouselImg5 from '../assets/image/ruby.png';
import carouselImg6 from '../assets/image/sql.jpg';
import { NavLink } from 'react-router-dom';


const MultiCarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
            <MDBCarouselItem itemId="1">

          <MDBRow>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid img-carousel" src= {carouselImg3} />
                  <MDBCardBody>
                    <MDBCardTitle>Company</MDBCardTitle>
                    <MDBCardText>
                      Come and Join our team now!
                    </MDBCardText>
                    <NavLink to="/Application" >
                    <MDBBtn color="primary">Apply now!</MDBBtn>
                    </NavLink>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid img-carousel" src={carouselImg2} />
                  <MDBCardBody>
                    <MDBCardTitle>Apply now</MDBCardTitle>
                    <MDBCardText>
                        Come and Join our team now!
                    </MDBCardText>
                    <NavLink to="/Application" >
                    <MDBBtn color="primary">Apply now!</MDBBtn>
                    </NavLink>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid img-carousel" src={carouselImg1} />
                  <MDBCardBody>
                    <MDBCardTitle>Apply now!</MDBCardTitle>
                    <MDBCardText>
                        Come and Join our team now!
                    </MDBCardText>
                    <NavLink to="/Application" >
                    <MDBBtn color="primary">Apply now!</MDBBtn>
                    </NavLink>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
          </MDBRow>
        
            </MDBCarouselItem>
            
            <MDBCarouselItem itemId="2">

<MDBRow>
    <MDBCol md="4">
      <MDBCard className="mb-2">
        <MDBCardImage className="img-fluid img-carousel" src={carouselImg4} />
        <MDBCardBody>
          <MDBCardTitle>Company</MDBCardTitle>
          <MDBCardText>
            Come and Join our team now!
          </MDBCardText>
          <NavLink to="/Application" >
            <MDBBtn color="primary">Apply now!</MDBBtn>
        </NavLink>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol md="4">
      <MDBCard className="mb-2">
        <MDBCardImage className="img-fluid img-carousel" src={carouselImg5} />
        <MDBCardBody>
          <MDBCardTitle>Company</MDBCardTitle>
          <MDBCardText>
          Come and Join our team now!
          </MDBCardText>
          <NavLink to="/Application" >
            <MDBBtn color="primary">Apply now!</MDBBtn>
          </NavLink>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol md="4">
      <MDBCard className="mb-2">
        <MDBCardImage className="img-fluid img-carousel" src={carouselImg6} />
        <MDBCardBody>
          <MDBCardTitle>Company</MDBCardTitle>
          <MDBCardText>
          Come and Join our team now!
          </MDBCardText>
          <NavLink to="/Application" >
            <MDBBtn color="primary">Apply now!</MDBBtn>
          </NavLink>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
</MDBRow>
  
  </MDBCarouselItem>
  
            <MDBCarouselItem itemId="3">

<MDBRow>
    <MDBCol md="4">
      <MDBCard className="mb-2">
        <MDBCardImage className="img-fluid img-carousel" src={carouselImg} />
        <MDBCardBody>
          <MDBCardTitle>Company</MDBCardTitle>
          <MDBCardText>
            Come and Join our team now!
          </MDBCardText>
          <NavLink to="/Application" >
            <MDBBtn color="primary">Apply now!</MDBBtn>
          </NavLink>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol md="4">
      <MDBCard className="mb-2">
        <MDBCardImage className="img-fluid img-carousel" src={carouselImg2} />
        <MDBCardBody>
          <MDBCardTitle>Company</MDBCardTitle>
          <MDBCardText>
            Come and Join our team now!
          </MDBCardText>
          <NavLink to="/Application" >
            <MDBBtn color="primary">Apply now!</MDBBtn>
          </NavLink>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol md="4">
      <MDBCard className="mb-2">
        <MDBCardImage className="img-fluid img-carousel" src={carouselImg3} />
        <MDBCardBody>
          <MDBCardTitle>Company</MDBCardTitle>
          <MDBCardText>
            Come and Join our team now!
          </MDBCardText>
          <NavLink to="/Application" >
            <MDBBtn color="primary">Apply now!</MDBBtn>
          </NavLink>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
</MDBRow>
  
  </MDBCarouselItem>
        </MDBCarouselInner> 
      </MDBCarousel>
    </MDBContainer>
  );
}

export default MultiCarouselPage;