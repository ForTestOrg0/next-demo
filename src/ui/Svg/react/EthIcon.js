import * as React from "react";
function EthIcon({
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
    d: "M475.44615406 992L179.69230812 567.38461531l295.75384594 175.90153875 295.75384594-175.90153875zM475.44615406 696.61538469L179.69230812 516.98461531 475.44615406 32l295.75384594 484.98461531z"
  }));
}
const ForwardRef = React.forwardRef(EthIcon);
export default ForwardRef;