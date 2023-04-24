import * as React from "react";
function CloseSquareIcon({
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
    d: "M912 32a80 80 0 0180 80v800a80 80 0 01-80 80H112a80 80 0 01-80-80V112a80 80 0 0180-80h800zM368 272l-96 96 144 144-144 144 96 96 144-144 144 144 96-96-144-144 144-144-96-96-144 144-144-144z"
  }));
}
const ForwardRef = React.forwardRef(CloseSquareIcon);
export default ForwardRef;