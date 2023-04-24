import * as React from "react";
function EthIcon({
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
    d: "M475.446 992L179.692 567.385l295.754 175.901L771.2 567.385zm0-295.385l-295.754-179.63L475.446 32 771.2 516.985z"
  }));
}
const ForwardRef = React.forwardRef(EthIcon);
export default ForwardRef;