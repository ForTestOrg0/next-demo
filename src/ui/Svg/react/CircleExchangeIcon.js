import * as React from "react";
function CircleExchangeIcon({
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
    d: "M512 32c265.08 0 480 214.92 480 480S777.08 992 512 992 32 777.08 32 512 246.92 32 512 32zm149.96 447.12a13.48 13.48 0 00-17.84 0v71.64H434.8c-8.92 0-13.36 4.52-13.36 13.48v107.48c0 8.96 4.44 13.44 13.36 13.44h204.88v76.16c0 8.96 4.44 13.44 13.36 13.44 2.24 0 3.36-1.12 4.44-2.24l1.2-1.08a4.96 4.96 0 013.28-1.2l155.88-143.32a13.68 13.68 0 000-17.92zm-298.4-215c-4.48 0-8.92 0-8.92 4.48l-133.6 120.92a13.68 13.68 0 000 17.92l133.6 116.48a13.48 13.48 0 0017.8 0c2.56-2.6 3.64-3.68 4.12-5 .36-.96.36-2.08.36-4v-49.24h209.32c8.92 0 13.36-4.48 13.36-13.44V344.72c0-8.96-4.44-13.44-13.36-13.44H376.92V277.6c0-8.96-4.48-13.44-13.36-13.44z"
  }));
}
const ForwardRef = React.forwardRef(CircleExchangeIcon);
export default ForwardRef;