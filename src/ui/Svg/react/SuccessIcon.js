import * as React from "react";
function SuccessIcon({
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
    d: "M512 32C246.691 32 32 246.691 32 512s214.691 480 480 480 480-214.691 480-480S777.309 32 512 32zm244.364 398.836L494.546 692.654c-5.237 5.237-12.219 8.728-20.073 8.728-9.6 1.745-19.2-.873-26.182-7.855L283.346 527.71a28.974 28.974 0 010-41.018l13.963-13.964c11.345-11.345 29.673-11.345 41.018 0l132.655 132.655L700.51 375.854c11.344-11.345 29.672-11.345 41.017 0l14.837 13.964c11.345 11.346 11.345 29.672 0 41.018z"
  }));
}
const ForwardRef = React.forwardRef(SuccessIcon);
export default ForwardRef;