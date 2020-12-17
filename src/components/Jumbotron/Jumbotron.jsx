import { MDBJumbotron, MDBBtn, MDBCol, MDBIcon } from "mdbreact";

const Jumbotron = () => {
  return (
    <MDBJumbotron style={{ padding: 0 }}>
      <MDBCol className="text-white text-center py-5 px-4" style={{ backgroundColor: "#ffe51f" }}>
        <MDBCol className="py-5">
          <h1 style={{color: "black"}} className="pt-3 m-5 font-bold">Become a JavaScript Super Hero!</h1>
          <p className="mx-5 mb-5"  style={{color: "black"}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
            optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
          </p>
          <div>
            <MDBBtn outline style={{border: "1px solid black"}} className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon>WEB</MDBBtn>
            <MDBBtn outline style={{border: "1px solid black"}} className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon>NPM</MDBBtn>
          </div>
        </MDBCol>
      </MDBCol>
    </MDBJumbotron>
  )
}

export default Jumbotron;
