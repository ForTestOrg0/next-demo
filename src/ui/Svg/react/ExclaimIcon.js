import * as React from "react";
function ExclaimIcon({
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
    d: "M512 32c265.08799969 0 480 214.91200031 480 480 0 265.08799969-214.91200031 480-480 480-265.08799969 0-480-214.91200031-480-480C32 246.91200031 246.91200031 32 512 32z m2.56000031 667.61599969c-31.99999969 0-57.408 24.64000031-57.408 56.19200062 0 31.99999969 25.44 56.19199969 57.43999969 56.19199969 31.55200031 0 57.408-24.192 57.408-56.19199969 0-31.584-25.85599969-56.19199969-57.408-56.19200062z m50.88-505.31199938h-102.144v448.32h102.144V194.27199969z"
  }));
}
const ForwardRef = React.forwardRef(ExclaimIcon);
export default ForwardRef;