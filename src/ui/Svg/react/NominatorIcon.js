import * as React from "react";
function NominatorIcon({
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
    d: "M661.403 531.561c115.188 0 208.55 96.08 208.55 214.609v171.694H160.805V746.17c0-118.528 93.362-214.609 208.55-214.609h292.048zM470.64 587.757h-86.8v296.592h87.46V739.684l.815 1.36c18.642 29.398 49.206 77.167 91.809 143.305h84.158V587.757h-87.46v143.771l-2.912-4.66c-18.253-29.05-47.225-75.38-87.07-139.111zm44.739-485.452c103.692 0 187.734 86.488 187.734 193.171 0 106.683-84.042 193.132-187.734 193.132-103.693 0-187.734-86.449-187.734-193.132s84.041-193.17 187.734-193.17z"
  }));
}
const ForwardRef = React.forwardRef(NominatorIcon);
export default ForwardRef;