import * as React from "react";
function WaitIcon({
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
    d: "M992 512c0-265.12-214.88-480-480-480S32 246.976 32 512s214.976 480 480 480 480-214.88 480-480zm-891.424 0c0-227.168 184.16-411.424 411.424-411.424 227.264 0 411.424 184.16 411.424 411.424 0 227.264-184.256 411.424-411.424 411.424-227.168 0-411.424-184.224-411.424-411.424zm448.352-184.64H438.144v295.424H659.68V512H548.928V327.36z"
  }));
}
const ForwardRef = React.forwardRef(WaitIcon);
export default ForwardRef;