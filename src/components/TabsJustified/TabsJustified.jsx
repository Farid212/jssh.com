import React, { Component } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from
"mdbreact";

class TabsJustified extends Component {
state = {
  activeItemJustified: "1"
}

toggleJustified = tab => e => {
  if (this.state.activeItemJustified !== tab) {
    this.setState({
      activeItemJustified: tab
    });
  }
};

render() {
    return (
      <MDBContainer>
        <MDBNav tabs className="nav-justified" color='indigo'>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemJustified === "1"} onClick={this.toggleJustified("1")} role="tab" >
              <MDBIcon icon="user" /> Weekly Lessons
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemJustified === "2"} onClick={this.toggleJustified("2")} role="tab" >
              <MDBIcon icon="heart" /> Full time bootcamp
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemJustified === "3"} onClick={this.toggleJustified("3")} role="tab" >
              <MDBIcon icon="envelope" /> Part time bootcamp
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent
          className="card"
          activeItem={this.state.activeItemJustified}
        >
          <MDBTabPane tabId="1" role="tabpanel">
            <p className="mt-2">
              Raw denim you probably haven't heard of them jean shorts
              Austin. Nesciunt tofu stumptown aliqua, retro synth master
              cleanse. Mustache cliche tempor, williamsburg carles vegan
              helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
              synth. Cosby sweater eu banh mi, qui irure terry richardson
              ex squid. Aliquip placeat salvia cillum iphone. Seitan
              aliquip quis cardigan american apparel, butcher voluptate
              nisi qui.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <p className="mt-2">
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla
              single-origin coffee squid. Exercitation +1 labore velit,
              blog sartorial PBR leggings next level wes anderson artisan
              four loko farm-to-table craft beer twee. Qui photo booth
              letterpress, commodo enim craft beer mlkshk aliquip jean
              shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
              assumenda labore aesthetic magna delectus mollit. Keytar
              helvetica VHS salvia yr, vero magna velit sapiente labore
              stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
              sustainable jean shorts beard ut DIY ethical culpa terry
              richardson biodiesel. Art party scenester stumptown, tumblr
              butcher vero sint qui sapiente accusamus tattooed echo park.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <p className="mt-2">
              Etsy mixtape wayfarers, ethical wes anderson tofu before
              they sold out mcsweeney's organic lomo retro fanny pack
              lo-fi farm-to-table readymade. Messenger bag gentrify
              pitchfork tattooed craft beer, iphone skateboard locavore
              carles etsy salvia banksy hoodie helvetica. DIY synth PBR
              banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
              Williamsburg banh mi whatever gluten-free, carles pitchfork
              biodiesel fixie etsy retro mlkshk vice blog. Scenester cred
              you probably haven't heard of them, vinyl craft beer blog
              stumptown. Pitchfork sustainable tofu synth chambray yr.
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}

export default TabsJustified;
