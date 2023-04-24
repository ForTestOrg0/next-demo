import * as React from "react";
function Sub1Icon({
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
    d: "M512 32c265.088 0 480 214.912 480 480 0 265.088-214.912 480-480 480-265.088 0-480-214.912-480-480C32 246.912 246.912 32 512 32zm172.8 144c-29.952 0-55.328 22.592-64 53.824v-2.144H441.6v568.64h179.2v-2.144c8.672 31.232 34.048 53.824 64 53.824 37.12 0 67.2-34.72 67.2-77.536s-30.08-77.536-67.2-77.536c-29.952 0-55.328 22.592-64 53.824v-2.144H486.4V537.856h134.4v-2.144c8.672 31.232 34.048 53.824 64 53.824 37.12 0 67.2-34.72 67.2-77.536s-30.08-77.536-67.2-77.536c-29.952 0-55.328 22.592-64 53.824v-2.144H486.4V279.392h134.4v-2.144c8.672 31.232 34.048 53.824 64 53.824 37.12 0 67.2-34.72 67.2-77.536S721.92 176 684.8 176zM262.4 382.752c-74.24 0-134.4 69.44-134.4 155.104 0 85.632 60.16 155.072 134.4 155.072 74.24 0 134.4-69.44 134.4-155.072 0-85.664-60.16-155.104-134.4-155.104z"
  }));
}
const ForwardRef = React.forwardRef(Sub1Icon);
export default ForwardRef;