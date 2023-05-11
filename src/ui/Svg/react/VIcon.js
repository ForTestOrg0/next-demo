import * as React from "react";
function VIcon({
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
    d: "M512 32c265.104 0 480 214.896 480 480s-214.896 480-480 480S32 777.104 32 512 246.896 32 512 32zM403.424 334.4H292.832l169.824 403.2h98.688l169.824-403.2h-108.144l-110.4 279.936L403.424 334.4z"
  }));
}
const ForwardRef = React.forwardRef(VIcon);
export default ForwardRef;