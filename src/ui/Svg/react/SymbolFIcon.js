import * as React from "react";
function SymbolFIcon({
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
    d: "M212.67 84.385a85.523 85.523 0 00-85.524 85.523V811.33a85.523 85.523 0 0085.523 85.523h641.423a85.523 85.523 0 0085.523-85.523V169.908a85.523 85.523 0 00-85.523-85.523H212.67zm265.42 470.248V720.25h-82.53V318.932h266.234v75.73H478.09v84.24h175.194v75.688H478.09z"
  }));
}
const ForwardRef = React.forwardRef(SymbolFIcon);
export default ForwardRef;