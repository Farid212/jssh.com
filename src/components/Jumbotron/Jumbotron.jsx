import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

const Jumbotron = () => {
  return (
    <MDBJumbotron style={{ padding: 0 }}>
      <MDBCol className="text-white text-center py-5 px-4" style={{ backgroundColor: "#ffe51f" }}>
        <MDBCol className="py-5">
          <MDBCardTitle style={{color: "black"}} className="h1-responsive pt-3 m-5 font-bold">Become a JavaScript Super Hero!</MDBCardTitle>
          <p className="mx-5 mb-5"  style={{color: "black"}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
            optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
          </p>
          <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
        </MDBCol>
      </MDBCol>
    </MDBJumbotron>
  )
}

export default Jumbotron;
