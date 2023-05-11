import * as React from "react";
function ClockIcon({
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
    d: "M512 32c264.96 0 480 215.04 480 480s-215.04 480-480 480S32 776.96 32 512 247.04 32 512 32z m34.464 193.92H477.536v297.408l210.432 210.432 48.336-48.912-189.84-189.84V225.968z"
  }));
}
const ForwardRef = React.forwardRef(ClockIcon);
export default ForwardRef;