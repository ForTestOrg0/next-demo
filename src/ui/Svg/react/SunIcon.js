import * as React from "react";
function SunIcon({
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
    d: "M285.104 216.944L206.576 137.648 141.104 203.696 219.68 283.04l65.424-66.048z m-122.208 251.04H32v87.984h130.896V467.936zM555.68 32H468.32v127.68h87.264V32z m327.264 171.696l-65.472-66.048-78.528 79.296L800 278.624l82.896-74.88z m-144 603.36l78.528 79.2 61.2-61.584L800 745.376l-61.104 61.68z m122.208-251.04H992V467.888h-130.896v88.032zM512 247.664c-144 0-261.84 118.944-261.84 264.24 0 145.296 117.84 264.192 261.84 264.192s261.792-118.896 261.792-264.192c0-145.296-117.792-264.24-261.792-264.24zM468.32 992h87.264v-127.68H468.32V992z m-327.264-171.792l65.472 66.048 78.528-79.2-61.008-61.68-82.992 74.88z"
  }));
}
const ForwardRef = React.forwardRef(SunIcon);
export default ForwardRef;