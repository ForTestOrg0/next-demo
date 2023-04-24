import * as React from "react";
function ContractOIcon({
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
    d: "M874.458 44.051c12.738 0 23.301 9.165 25.476 21.243l.427 4.66v880.26c0 12.74-9.165 23.302-21.243 25.477l-4.66.428H149.542a25.904 25.904 0 01-25.476-21.244l-.427-4.66V69.955c0-12.739 9.165-23.302 21.243-25.477l4.66-.427h724.916zM848.593 95.82H175.407v828.53h673.186V95.82zM512 691.333v77.672H253.08v-77.672H512zm258.92-155.345v77.673H253.08v-77.673h517.84zm0-310.689v233.017H253.08V225.3h517.84z"
  }));
}
const ForwardRef = React.forwardRef(ContractOIcon);
export default ForwardRef;