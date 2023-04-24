import * as React from "react";
function FromToIcon({
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
    d: "M654.42 322.852a38.235 38.235 0 00-59.445 31.815v90.804h-448.47a38.235 38.235 0 00-38.235 38.236v85.75c0 21.127 17.15 38.235 38.236 38.235h448.47v90.804a38.235 38.235 0 0059.445 31.815l257.872-171.915a38.235 38.235 0 000-63.629L654.42 322.852z"
  }));
}
const ForwardRef = React.forwardRef(FromToIcon);
export default ForwardRef;