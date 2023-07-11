import * as React from "react";
function ButtonRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    className: "icon",
    "p-id": 2508,
    t: 1688460785840,
    viewBox: "0 0 1024 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M224 154.112L581.888 512 224 869.888l96 96L773.888 512 320 58.112 224 154.112z",
    "p-id": 2509
  }));
}
const ForwardRef = React.forwardRef(ButtonRightIcon);
export default ForwardRef;