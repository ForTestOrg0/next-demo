import * as React from "react";
function SerarchIcon({
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
    d: "M955.733333 905.6256l-197.666133-197.461333a388.1984 388.1984 0 0 0 90.692267-249.924267C848.759467 242.858667 674.030933 68.266667 458.513067 68.266667S68.266667 242.858667 68.266667 458.24c0 215.381333 174.728533 389.9392 390.2464 389.9392 94.788267 0 181.691733-33.792 249.309866-89.941333L905.557333 955.733333 955.733333 905.6256z m-177.937066-447.3856c0 176.196267-142.9504 319.044267-319.2832 319.044267-176.3328 0-319.2832-142.848-319.2832-319.044267 0-176.2304 142.9504-319.0784 319.2832-319.0784 176.3328 0 319.2832 142.848 319.2832 319.0784z"
  }));
}
const ForwardRef = React.forwardRef(SerarchIcon);
export default ForwardRef;