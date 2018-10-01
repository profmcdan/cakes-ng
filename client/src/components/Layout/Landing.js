import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container } from "mdbreact";

class Landing extends Component {
  render() {
    return (
      <main style={mainStyle}>
        <Container fluid style={{ height: 2000 }} className="mt-5">
          <h2>Advanced Double Navigation with fixed SideNav & fixed Navbar:</h2>
          <br />
          <h5>1. Fixed side menu, hidden on small devices.</h5>
          <h5>
            2. Fixed Navbar. It will always stay visible on the top, even when
            you scroll down.
          </h5>
        </Container>
      </main>
    );
  }
}

Landing.propTypes = {};

export default Landing;
