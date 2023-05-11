import * as React from "react";
function HamburgerButtonIcon({
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
    d: "M927.87676609 823.1137353v83.17535433H96.12323391v-83.17535433h831.75353218z m0-374.28908825v83.17535295H96.12323391v-83.17535295h831.75353218z m0-374.28908962v83.17535293H96.12323391V74.53555743h831.75353218zM927.87676609 864.70141179v83.1753543H96.12323391v-83.1753543h831.75353218z m0-374.28908826v83.17535293H96.12323391v-83.17535293h831.75353218z m0-374.28908962v83.1753543H96.12323391V116.12323391h831.75353218z"
  }));
}
const ForwardRef = React.forwardRef(HamburgerButtonIcon);
export default ForwardRef;