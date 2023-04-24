import * as React from "react";
function InfomationIcon({
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
    d: "M512 32c265.088 0 480 214.912 480 480 0 265.088-214.912 480-480 480-265.088 0-480-214.912-480-480C32 246.912 246.912 32 512 32zm48.704 349.408H458.56v448.288h102.144v-448.32zM509.408 212C477.824 212 452 236.192 452 268.192c0 31.584 25.824 56.192 57.408 56.192 32 0 57.44-24.64 57.44-56.192 0-32-25.44-56.192-57.44-56.192z"
  }));
}
const ForwardRef = React.forwardRef(InfomationIcon);
export default ForwardRef;