import * as React from "react";
function VIcon({
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
    d: "M512 32c265.104 0 480 214.896 480 480S777.104 992 512 992 32 777.104 32 512 246.896 32 512 32zM403.424 334.4H292.832l169.824 403.2h98.688l169.824-403.2H623.024l-110.4 279.936-109.2-279.936z"
  }));
}
const ForwardRef = React.forwardRef(VIcon);
export default ForwardRef;