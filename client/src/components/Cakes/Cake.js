import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardImage,
  CardText,
  CardTitle,
  Button,
  Fa
} from "mdbreact";
import cakeImage from "../../assets/cake.png";

class Cake extends Component {
  render() {
    return (
      <Card>
        <CardImage cascade className="img-fluid" src={cakeImage} />
        <Button
          floating
          tag="a"
          className="ml-auto mr-4 lighten-3 mdb-color"
          action
        >
          <Fa icon="chevron-right" />
        </Button>
        <CardBody cascade>
          <CardTitle>Unicorn Face Cake</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button href="#">Button</Button>
        </CardBody>
        <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
          <ul className="list-unstyled list-inline font-small">
            <li className="list-inline-item pr-2 white-text">
              <Fa icon="clock-o" /> 05/10/2015
            </li>
            <li className="list-inline-item pr-2">
              <a href="#" className="white-text">
                <Fa icon="comments-o" />
                12
              </a>
            </li>
            <li className="list-inline-item pr-2">
              <a href="#" className="white-text">
                <Fa icon="facebook"> </Fa>
                21
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="white-text">
                <Fa icon="twitter"> </Fa>5
              </a>
            </li>
          </ul>
        </div>
      </Card>
    );
  }
}

Cake.propTypes = {};

export default Cake;
