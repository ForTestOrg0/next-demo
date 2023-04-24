import * as React from "react";
function TechnicalCommIcon({
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
    d: "M730.451 809.315c2.185 0 4.005 1.857 4.005 4.15v58.473a4.078 4.078 0 01-4.005 4.15H299.807c-2.185 0-4.005-1.82-4.005-4.15v-58.472c0-2.294 1.82-4.151 4.005-4.151zm163.476-661.404c22.064 0 39.904 18.496 39.904 41.324V707.59c0 22.828-17.84 41.324-39.868 41.324H136.294c-22.027 0-39.867-18.496-39.867-41.324V189.235c0-22.828 17.84-41.324 39.867-41.324zM621.552 281.46l-38.375 39.795 115.161 119.385-115.16 119.348 38.374 39.831 153.5-159.18zm-210.553 0l-153.536 159.18L411 599.782l38.412-39.795-115.234-119.348 115.197-119.385z"
  }));
}
const ForwardRef = React.forwardRef(TechnicalCommIcon);
export default ForwardRef;