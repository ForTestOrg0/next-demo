import * as React from "react";
function ClockIcon({
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
    d: "M512 32c264.96 0 480 215.04 480 480S776.96 992 512 992 32 776.96 32 512 247.04 32 512 32zm34.464 193.92h-68.928v297.408L687.968 733.76l48.336-48.912-189.84-189.84v-269.04z"
  }));
}
const ForwardRef = React.forwardRef(ClockIcon);
export default ForwardRef;