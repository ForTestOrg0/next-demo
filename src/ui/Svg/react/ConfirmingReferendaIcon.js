import * as React from "react";
function ConfirmingReferendaIcon({
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
    d: "M569.202 108.13a32.585 32.585 0 0146.115 0l338.137 338.137a32.585 32.585 0 010 46.114L492.381 953.454a32.585 32.585 0 01-46.114 0L108.129 615.317a32.585 32.585 0 010-46.115l461.073-461.073zm117.636 270.524L472.5 600.997 374.746 499.56 335.17 540.6l137.18 142.33 254.063-263.235-39.575-41.04z"
  }));
}
const ForwardRef = React.forwardRef(ConfirmingReferendaIcon);
export default ForwardRef;