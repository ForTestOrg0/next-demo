import * as React from "react";
function EyeOpenIcon({
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
    d: "M512 32c265.088 0 480 214.912 480 480 0 265.088-214.912 480-480 480-265.088 0-480-214.912-480-480C32 246.912 246.912 32 512 32zm0 288c-161.024 0-295.904 81.92-331.36 192C216.128 622.08 351.008 704 512 704c160.96 0 295.872-81.92 331.36-192C807.904 401.92 673.024 320 512 320zm0 48a144 144 0 110 288 144 144 0 010-288z"
  }));
}
const ForwardRef = React.forwardRef(EyeOpenIcon);
export default ForwardRef;