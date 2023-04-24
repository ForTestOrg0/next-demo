import * as React from "react";
function UnfoldAllIcon({
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
    d: "M472.882 210.694a60.284 60.284 0 100-120.492H169.159a60.284 60.284 0 000 120.492h303.723zm483.424 475.064a61.358 61.358 0 0084.138-21.475l286.082-481.354a61.358 61.358 0 00-52.615-92.727H701.594a61.358 61.358 0 00-52.768 92.727l286.082 481.43a61.358 61.358 0 0021.475 21.4zM472.882 572.246a60.284 60.284 0 100-120.415H169.159a60.284 60.284 0 000 120.415h303.723zm787.914 361.629a60.284 60.284 0 000-120.492H169.159a60.284 60.284 0 000 120.492h1091.637z"
  }));
}
const ForwardRef = React.forwardRef(UnfoldAllIcon);
export default ForwardRef;