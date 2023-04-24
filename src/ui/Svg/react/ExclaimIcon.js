import * as React from "react";
function ExclaimIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon",
    viewBox: "0 0 1024 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M512 32c265.088 0 480 214.912 480 480 0 265.088-214.912 480-480 480-265.088 0-480-214.912-480-480C32 246.912 246.912 32 512 32zm2.56 667.616c-32 0-57.408 24.64-57.408 56.192 0 32 25.44 56.192 57.44 56.192C546.144 812 572 787.808 572 755.808c0-31.584-25.856-56.192-57.408-56.192zm50.88-505.312H463.296v448.32H565.44V194.272z"
  }));
}
const ForwardRef = React.forwardRef(ExclaimIcon);
export default ForwardRef;