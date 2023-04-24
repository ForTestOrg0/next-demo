import * as React from "react";
function TransfersIcon({
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
    d: "M880.981 158.208a40.619 40.619 0 0140.278 35.499l.341 5.12v609.28a40.619 40.619 0 01-35.499 40.277l-5.12.341H149.845a40.619 40.619 0 01-40.277-35.498l-.341-5.12v-609.28a40.619 40.619 0 0135.498-40.278l5.12-.341h731.136zm0 40.619H149.845v609.28h731.136v-609.28zm-172.373 341.88v74.478H483.226V726.87L316.075 565.862a14.61 14.61 0 0110.137-25.156h382.396zM547.601 280.063l167.117 161.007a14.61 14.61 0 01-10.138 25.156H322.22v-74.479H547.6V280.064z"
  }));
}
const ForwardRef = React.forwardRef(TransfersIcon);
export default ForwardRef;