import * as React from "react";
function TransfersIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    className: "icon",
    viewBox: "0 0 1024 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M880.981333 158.208a40.618667 40.618667 0 0 1 40.277334 35.498667l0.341333 5.12v609.28a40.618667 40.618667 0 0 1-35.498667 40.277333l-5.12 0.341333H149.845333a40.618667 40.618667 0 0 1-40.277333-35.498666l-0.341333-5.12V198.826667a40.618667 40.618667 0 0 1 35.498666-40.277334l5.12-0.341333h731.136z m0 40.618667H149.845333v609.28h731.136V198.826667z m-172.373333 341.879466v74.478934h-225.3824v111.684266L316.074667 565.8624a14.609067 14.609067 0 0 1 10.1376-25.156267H708.608z m-161.006933-260.642133l167.1168 161.006933a14.609067 14.609067 0 0 1-10.1376 25.156267H322.218667v-74.478933h225.3824V280.064z"
  }));
}
const ForwardRef = React.forwardRef(TransfersIcon);
export default ForwardRef;