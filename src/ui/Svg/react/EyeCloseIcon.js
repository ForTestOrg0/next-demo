import * as React from "react";
function EyeCloseIcon({
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
    d: "M512 32c265.088 0 480 214.912 480 480 0 265.088-214.912 480-480 480-265.088 0-480-214.912-480-480C32 246.912 246.912 32 512 32zM211.616 423.168C204.064 435.648 200 448.8 200 462.4c0 30.4 20.256 58.624 54.88 81.984L239.328 648.16l74.88-73.76c45.984 17.6 102.944 29.312 165.504 32.64L512 704l32.192-96.544c63.168-2.528 120.96-13.568 168.032-30.656l72.448 71.36-14.784-98.56c39.616-24.288 63.04-54.496 63.04-87.2 0-13.568-4-26.72-11.584-39.168C784.096 484.576 661.728 529.6 516.48 529.6c-145.28 0-267.68-45.024-304.864-106.432z"
  }));
}
const ForwardRef = React.forwardRef(EyeCloseIcon);
export default ForwardRef;