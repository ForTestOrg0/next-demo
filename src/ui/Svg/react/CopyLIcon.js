import * as React from "react";
function CopyLIcon({
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
    d: "M734.24 233.333v720H112v-720h622.24zm-88.88 90H200.8v540h444.48v-540zm266.64-270v720h-88.88v-630H245.36v-90H912z"
  }));
}
const ForwardRef = React.forwardRef(CopyLIcon);
export default ForwardRef;