import * as React from "react";
function CirclePlusIcon({
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
    d: "M512 32c265.093 0 480 214.907 480 480S777.093 992 512 992 32 777.093 32 512 246.907 32 512 32zm3.217 322.151a32.211 32.211 0 00-32.211 32.212v96.643h-96.643a32.211 32.211 0 100 64.432h96.643v96.644a32.211 32.211 0 0064.432 0v-96.644h96.644a32.211 32.211 0 000-64.432h-96.644v-96.643a32.211 32.211 0 00-32.221-32.212z"
  }));
}
const ForwardRef = React.forwardRef(CirclePlusIcon);
export default ForwardRef;