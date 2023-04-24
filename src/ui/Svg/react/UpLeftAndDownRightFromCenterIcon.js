import * as React from "react";
function UpLeftAndDownRightFromCenterIcon({
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
    d: "M167.9 62A105.9 105.9 0 0062 167.9v688.2A105.9 105.9 0 00167.9 962h688.2A105.862 105.862 0 00962 856.1V167.9A105.9 105.9 0 00856.1 62zm408.6 524.025a42.113 42.113 0 0156.588-2.738l3 2.738 143.062 143.1v-66.75a42.113 42.113 0 0184.075-3.862l.15 3.862V830.75c0 21.975-16.8 40.013-38.25 41.925l-3.862.187h-168.45a42.113 42.113 0 01-3.826-84.074l3.825-.15h66.75L576.5 645.537a42.113 42.113 0 010-59.55zm-383.625-425.85H361.25a42.113 42.113 0 013.825 84.075l-3.825.15H294.5l143.1 143.1a42.113 42.113 0 01-56.588 62.288l-3-2.738L234.95 303.987v66.75a42.113 42.113 0 01-84.075 3.863l-.15-3.825V202.25c0-21.938 16.8-39.975 38.25-41.925z"
  }));
}
const ForwardRef = React.forwardRef(UpLeftAndDownRightFromCenterIcon);
export default ForwardRef;