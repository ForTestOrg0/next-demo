import * as React from "react";
function TimesIcon({
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
    d: "M978.034 155.64L868.399 45.966 512 402.366l-356.36-356.4L45.966 155.64 402.366 512l-356.4 356.4L155.64 978.033 512 621.634l356.4 356.4 109.634-109.635L621.634 512l356.4-356.36z"
  }));
}
const ForwardRef = React.forwardRef(TimesIcon);
export default ForwardRef;