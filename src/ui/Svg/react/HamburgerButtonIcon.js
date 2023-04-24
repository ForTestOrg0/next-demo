import * as React from "react";
function HamburgerButtonIcon({
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
    d: "M927.877 823.114v83.175H96.123v-83.175h831.754zm0-374.29V532H96.123v-83.175h831.754zm0-374.288v83.175H96.123V74.536h831.754zm0 790.165v83.176H96.123V864.7h831.754zm0-374.289v83.176H96.123v-83.176h831.754zm0-374.289V199.3H96.123v-83.176h831.754z"
  }));
}
const ForwardRef = React.forwardRef(HamburgerButtonIcon);
export default ForwardRef;