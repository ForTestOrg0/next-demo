import * as React from "react";
function TimesIcon({
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
    d: "M978.03377778 155.63950421L868.39933155 45.96622222 512 402.36555378 155.63950421 45.96622222 45.96622222 155.63950421 402.36555378 512 45.96622222 868.39933155 155.63950421 978.03377778 512 621.63444622 868.39933155 978.03377778 978.03377778 868.39933155 621.63444622 512 978.03377778 155.63950421z"
  }));
}
const ForwardRef = React.forwardRef(TimesIcon);
export default ForwardRef;