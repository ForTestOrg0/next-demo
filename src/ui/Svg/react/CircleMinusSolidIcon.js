import * as React from "react";
function CircleMinusSolidIcon({
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
    d: "M512 32c265.08799969 0 480 214.91200031 480 480 0 265.08799969-214.91200031 480-480 480-265.08799969 0-480-214.91200031-480-480C32 246.91200031 246.91200031 32 512 32z m192 432H320v96h384v-96z"
  }));
}
const ForwardRef = React.forwardRef(CircleMinusSolidIcon);
export default ForwardRef;