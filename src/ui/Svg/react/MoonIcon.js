import * as React from "react";
function MoonIcon({
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
    d: "M510.933 992C259.733 992 53.653 799.253 32 553.707a44.8 44.8 0 0178.933-26.827c.267.373.64.107.64-.907a290.4 290.4 0 00212.267 91.84 293.92 293.92 0 00293.92-293.92c0-84.426-35.733-159.786-92.747-213.066.16-.16.64-.16.427-.374A45.173 45.173 0 01553.92 32C799.307 53.867 992 259.733 992 511.04A480.907 480.907 0 01510.933 992z"
  }));
}
const ForwardRef = React.forwardRef(MoonIcon);
export default ForwardRef;