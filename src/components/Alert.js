import React from "react";
import PropTypes from "prop-types";

import { CSSTransition } from "react-transition-group";

const Alert = ({ isShown, info }) => (
  <CSSTransition
    timeout={250}
    classNames="alert"
    in={isShown}
    style={{ display: isShown ? "block" : "none" }}
  >
    <div className="alert">{info}</div>
  </CSSTransition>
);

export default Alert;

Alert.propTypes = {
  isShown: PropTypes.bool,
  info: PropTypes.string,
};
