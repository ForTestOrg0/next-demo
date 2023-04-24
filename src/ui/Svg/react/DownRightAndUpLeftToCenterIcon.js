import * as React from "react";
function DownRightAndUpLeftToCenterIcon({
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
    d: "M167.9 62A105.9 105.9 0 0062 167.9v688.2A105.9 105.9 0 00167.9 962h688.2A105.862 105.862 0 00962 856.1V167.9A105.9 105.9 0 00856.1 62zm421.988 495.263h168.45a42.113 42.113 0 013.824 84.037l-3.825.188h-66.75L834.65 784.55a42.113 42.113 0 01-56.55 62.288l-3-2.738L632 701v66.825a42.113 42.113 0 01-84.038 3.825l-.187-3.825v-168.45c0-21.975 16.8-40.013 38.25-41.963zm-410.4-368.288a42.113 42.113 0 0156.55-2.737l3 2.737L382.137 332v-66.75a42.113 42.113 0 0184.037-3.862l.188 3.825V433.7c0 21.938-16.8 39.975-38.25 41.925l-3.863.188H255.8a42.113 42.113 0 01-3.825-84.075l3.825-.15h66.788l-143.1-143.063a42.113 42.113 0 010-59.55z"
  }));
}
const ForwardRef = React.forwardRef(DownRightAndUpLeftToCenterIcon);
export default ForwardRef;