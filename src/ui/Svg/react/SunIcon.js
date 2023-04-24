import * as React from "react";
function SunIcon({
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
    d: "M285.104 216.944l-78.528-79.296-65.472 66.048 78.576 79.344 65.424-66.048zm-122.208 251.04H32v87.984h130.896v-88.032zM555.68 32h-87.36v127.68h87.264V32zm327.264 171.696l-65.472-66.048-78.528 79.296L800 278.624l82.896-74.88zm-144 603.36l78.528 79.2 61.2-61.584L800 745.376l-61.104 61.68zm122.208-251.04H992v-88.128H861.104v88.032zM512 247.664c-144 0-261.84 118.944-261.84 264.24S368 776.096 512 776.096 773.792 657.2 773.792 511.904 656 247.664 512 247.664zM468.32 992h87.264V864.32H468.32V992zM141.056 820.208l65.472 66.048 78.528-79.2-61.008-61.68-82.992 74.88z"
  }));
}
const ForwardRef = React.forwardRef(SunIcon);
export default ForwardRef;