import { Component } from "react";
import PropTypes from "prop-types";

class WelcomeClass extends Component {
  render() {
    return <h1>hello , {this.props.name}</h1>;
  }
}

WelcomeClass.propTypes = {
  name: PropTypes.string,
};

export default WelcomeClass;
