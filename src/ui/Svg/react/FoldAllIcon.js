import * as React from "react";
function FoldAllIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon",
    viewBox: "0 0 1489 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M472.882 813.306a60.284 60.284 0 110 120.492H169.159a60.284 60.284 0 010-120.492h303.723zm483.424-475.064a61.358 61.358 0 0184.138 21.475l286.082 481.354a61.358 61.358 0 01-52.615 92.727H701.594a61.358 61.358 0 01-52.768-92.727l286.082-481.43a61.358 61.358 0 0121.475-21.4zM472.882 451.754a60.284 60.284 0 110 120.415H169.159a60.284 60.284 0 010-120.415h303.723zm787.914-361.629a60.284 60.284 0 010 120.492H169.159a60.284 60.284 0 010-120.492h1091.637z"
  }));
}
const ForwardRef = React.forwardRef(FoldAllIcon);
export default ForwardRef;